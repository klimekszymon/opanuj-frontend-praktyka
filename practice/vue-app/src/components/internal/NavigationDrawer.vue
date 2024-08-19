<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { computed, onMounted, onUnmounted } from 'vue';
import { useUser } from '@/composables/useUser';

const { session, login, logout } = useUser();

const allLinks = [
  ['Inżynieria jakości - tydzień 1', '/week-1-module', true],
  ['Inżynieria jakości i testy jednostkowe', '/lessons/1-unit-tests'],
  // ["Testy end-to-end (e2e)", "/exercises/1-end"],
  // ["Bezpieczna komunikacja z API", "/exercises/1-end"],
  ['App: Kalkulator', '/calculator/app-calculator', true],
  ['App: Zgadnij Flagę', '/countries/app-country-flags', true],
];

const route = useRoute();
const router = useRouter();

// left arrow handler
function leftArrowHandler(e) {
  if (e.key === 'ArrowLeft' && e.shiftKey && prevLink.value[1]) {
    router.push(prevLink.value[1]);
  }
}
onUnmounted(() =>
  document.body.removeEventListener('keydown', leftArrowHandler),
);
onMounted(() => document.body.addEventListener('keydown', leftArrowHandler));

// right arrow handler
function rightArrowHandler(e) {
  if (e.key === 'ArrowRight' && e.shiftKey && nextLink.value) {
    router.push(nextLink.value[1]);
  }
}
onMounted(() => document.body.addEventListener('keydown', rightArrowHandler));
onMounted(() => document.body.addEventListener('keydown', rightArrowHandler));

// Links

const activeLink = computed(() => {
  return allLinks.find((link) => link[1] === route.path) || ['', '/'];
});

const nextLink = computed(() => {
  const currentIndex = allLinks.findIndex((link) => link[1] === route.path);
  const nextIndex = currentIndex + 1;
  return allLinks[nextIndex] || null;
});

const prevLink = computed(() => {
  const currentIndex = allLinks.findIndex((link) => link[1] === route.path);
  const prevIndex = currentIndex - 1;
  return allLinks[prevIndex] || ['', '/'];
});
</script>
<template>
  <header
    class="fixed z-[99999999] flex justify-between w-full p-3 text-2xl bg-gray-100 dark:bg-neutral"
  >
    <h1 class="flex items-center gap-3">
      <RouterLink to="/">
        <Icon icon="material-symbols:home" />
      </RouterLink>
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
      <Icon icon="material-symbols:chevron-left"></Icon>
    </RouterLink>
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
