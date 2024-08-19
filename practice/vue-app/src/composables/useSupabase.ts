import { createClient } from "@supabase/supabase-js";
import type { SupabaseClient } from "@supabase/supabase-js";
let supabase: SupabaseClient | null = null;
export const useSupabase = () => {
  if (!supabase) {
    supabase = createClient(
      //@ts-ignore this works
      import.meta.env.VITE_SUPABASE_URL,
      //@ts-ignore this works
      import.meta.env.VITE_SUPABASE_ANON_KEY,
    );
  }

  return supabase as SupabaseClient;
};
