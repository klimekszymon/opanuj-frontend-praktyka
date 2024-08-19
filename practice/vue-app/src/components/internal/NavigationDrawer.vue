<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import { computed, onMounted, onUnmounted } from "vue";
import { useUser } from "@/composables/useUser";

const { session, login, logout } = useUser();

const allLinks = [
  ["Day 1", "/day-1-welcome", true],
  ["Exercise 1 Start", "/exercises/1-begin"],
  ["Exercise 1 End", "/exercises/1-end"],
  ["Exercise 2 Start", "/exercises/2-begin"],
  ["Exercise 2 End", "/exercises/2-end"],
  ["Exercise 3 Start", "/exercises/3-begin"],
  ["Exercise 3 End", "/exercises/3-end"],
  ["Exercise 4 Start", "/exercises/4-begin"],
  ["Exercise 4 End", "/exercises/4-end"],
  ["Exercise 4 Bonus Start 🔥", "/exercises/4-zbonus-begin"],
  ["Exercise 4 Bonus End 🔥", "/exercises/4-zbonus-end"],
  ["Exercise 5 Start", "/exercises/5-begin"],
  ["Exercise 5 End", "/exercises/5-end"],
  ["Day 2", "/day-2-welcome", true],
  ["Exercise 6 Start", "/exercises/6-begin"],
  ["Exercise 6 End", "/exercises/6-end"],
  ["Exercise 7 Start", "/exercises/7-begin"],
  ["Exercise 7 End", "/exercises/7-end"],
  ["Exercise 8 Start", "/exercises/8-begin"],
  ["Exercise 8 End", "/exercises/8-end"],
  ["Exercise 9 Start", "/exercises/9-begin"],
  ["Exercise 9 End", "/exercises/9-end"],
  ["Exercise 10 Start", "/exercises/10-begin"],
  ["Exercise 10 End", "/exercises/10-end"],
  ["Day 3", "/day-3-welcome", true],
  ["Exercise 11 Start", "/exercises/11-begin"],
  ["Exercise 11 End", "/exercises/11-end"],
  ["Exercise 12 Start", "/exercises/12-begin"],
  ["Exercise 12 End", "/exercises/12-end"],
  ["Exercise 12 Bonus Start 🔥", "/exercises/12-zbonus-begin"],
  ["Exercise 12 Bonus End 🔥", "/exercises/12-zbonus-end"],
  ["Exercise 13 Start", "/exercises/13-begin"],
  ["Exercise 13 End", "/exercises/13-end"],
  ["Day 4", "/day-4-welcome", true],
  ["Live Quiz", "/live-quiz/quiz"],
  ["Feature Challenge", "/challenges/feature-challenge"],
  ["Bug Challenge", "/challenges/bug-challenge"],
  // ["Take Home Practice Exam", "/take-home-exam"],
];

const route = useRoute();
const router = useRouter();

// left arrow handler
function leftArrowHandler(e) {
  if (e.key === "ArrowLeft" && e.shiftKey && prevLink.value[1]) {
    router.push(prevLink.value[1]);
  }
}
onUnmounted(() =>
  document.body.removeEventListener("keydown", leftArrowHandler),
);
onMounted(() => document.body.addEventListener("keydown", leftArrowHandler));

// right arrow handler
function rightArrowHandler(e) {
  if (e.key === "ArrowRight" && e.shiftKey && nextLink.value) {
    router.push(nextLink.value[1]);
  }
}
onMounted(() => document.body.addEventListener("keydown", rightArrowHandler));
onMounted(() => document.body.addEventListener("keydown", rightArrowHandler));

// Links

const activeLink = computed(() => {
  return allLinks.find((link) => link[1] === route.path) || ["", "/"];
});

const nextLink = computed(() => {
  const currentIndex = allLinks.findIndex((link) => link[1] === route.path);
  const nextIndex = currentIndex + 1;
  return allLinks[nextIndex] || null;
});

const prevLink = computed(() => {
  const currentIndex = allLinks.findIndex((link) => link[1] === route.path);
  const prevIndex = currentIndex - 1;
  return allLinks[prevIndex] || ["", "/"];
});
</script>
<template>
  <header
    class="fixed z-[99999999] flex justify-between w-full p-3 text-2xl bg-gray-100 dark:bg-neutral"
  >
    <h1 class="flex items-center gap-3">
      <RouterLink to="/"><Icon icon="material-symbols:home" /></RouterLink>
      {{ activeLink[0] }}
    </h1>

    <div class="flex items-center gap-3">
      <button
        v-if="!session"
        @click="login()"
        class="text-sm btn btn-primary btn-xs"
      >
        Login with <Icon icon="fa:github"></Icon>
      </button>
      <div v-if="session" class="relative flex items-center gap-3 group">
        <span class="text-sm">{{ session.user.user_metadata.name }}</span>
        <img
          class="w-10 h-10 rounded-full"
          :src="session.user.user_metadata.avatar_url"
          alt=""
        />
        <ul
          class="absolute right-0 hidden w-56 menu bg-base-200 rounded-box top-full group-hover:block"
        >
          <li><a @click.prevent="logout()">Logout</a></li>
        </ul>
      </div>

      <label for="my-drawer" class="text-3xl cursor-pointer text-base-content">
        <Icon icon="ci:hamburger-lg" />
      </label>
    </div>
  </header>

  <div class="drawer drawer-end">
    <input id="my-drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content">
      <slot></slot>
    </div>
    <div class="drawer-side z-[9999999]">
      <label
        for="my-drawer"
        aria-label="close sidebar"
        class="drawer-overlay"
      ></label>
      <ul
        class="min-h-full p-5 pt-20 pb-20 mb-10 overflow-auto text-lg menu w-80 bg-base-200 text-base-content"
      >
        <li
          v-for="link in allLinks"
          :key="link[0]"
          :class="{
            'bg-primary rounded text-white': link[1] === activeLink[1],
          }"
        >
          <RouterLink :to="link[1]">
            <component :is="link[2] ? 'strong' : 'span'">
              {{ link[0] }}
            </component>
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <div
    v-if="$route.path.startsWith('/exercises')"
    class="fixed bottom-0 left-0 right-0 flex justify-between p-4 text-5xl"
  >
    <RouterLink
      :to="prevLink[1]"
      :class="{ invisible: route.path === '/' }"
      title="⇧ ◀"
    >
      <Icon icon="material-symbols:chevron-left"></Icon
    ></RouterLink>
    <RouterLink :to="nextLink[1]" v-if="nextLink" title="⇧ ▶">
      <Icon icon="material-symbols:chevron-right"></Icon>
    </RouterLink>
  </div>
</template>
<style>
input,
select,
textarea {
  outline-offset: 0 !important;
}
</style>
