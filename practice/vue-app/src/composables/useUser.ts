import { useSupabase } from "./useSupabase";
import type { Session } from "@supabase/supabase-js";
import { ref, onMounted, computed } from "vue";
import { useRoute } from "vue-router";
const session = ref<Session | null>();
export const useUser = () => {
  const supabase = useSupabase();
  const route = useRoute();

  onMounted(() => {
    supabase.auth.getSession().then(({ data }) => {
      session.value = data.session;
    });

    supabase.auth.onAuthStateChange((_, _session) => {
      session.value = _session;
    });
  });

  function login() {
    console.log(route.fullPath);
    supabase.auth.signInWithOAuth({
      provider: "github",
      options: {
        redirectTo: window.location.toString(),
      },
    });
  }

  function logout() {
    supabase.auth.signOut();
  }

  // This only helps provide some nice UX
  // real security is done on the server
  const isAdmin = computed(() => {
    const admins = ["me@danielkelly.io", "mostafasaid1994@gmail.com"];
    return admins.includes(session.value?.user.email || "");
  });

  return { session, login, logout, isAdmin };
};
