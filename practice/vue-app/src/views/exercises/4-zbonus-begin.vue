<script setup>
import { ref, reactive, nextTick } from "vue";

let users = reactive([]);
const page = ref(1);

async function fetchUsers() {
  const res = await fetch(`/api/users/${page.value}.json`);
  users = await res.json();
}

fetchUsers();

function updatePage(pageNumber) {
  page.value = pageNumber;
  fetchUsers();
}

function incrementVote(user) {
  user.votes++;
}

function decrementVote(user) {
  if (user.votes > 0) user.votes--;
}
</script>
<template>
  <div class="viewport-center">
    <div>
      <ul class="user-wrapper">
        <li
          class="user-card"
          v-for="(user, index) in users"
          :key="user.id"
          :tabindex="index + 1"
          @keydown.arrow-up="incrementVote(user)"
          @keydown.arrow-down="decrementVote(user)"
        >
          <img class="avatar" :src="user.avatar || '/placeholder-avatar.jpg'" />
          <div>
            <p class="mb-2">{{ user.name }}</p>
            <button @click="user.votes++">Vote {{ user.votes }}</button>
          </div>
        </li>
      </ul>
      <ul class="pagination">
        <li
          v-for="n in 3"
          @click="updatePage(n)"
          :key="n"
          :class="{
            active: n === page,
          }"
        >
          <button>{{ n }}</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.user-wrapper {
  @apply flex flex-wrap gap-10 justify-center;
}
.user-card {
  @apply p-3 shadow-lg border border-slate-200 dark:border-slate-950 rounded w-80 relative flex items-center;
}
.avatar {
  @apply font-bold object-cover w-24 h-24 rounded-full mr-5 dark:bg-slate-700 bg-slate-200 inline-flex justify-center items-center text-3xl;
}

button {
  @apply bg-blue-600 rounded-md border border-blue-800 px-2  text-white;
}
.pagination {
  @apply flex gap-2 justify-center mt-10;
}
.pagination button {
  @apply bg-blue-600 rounded-md border border-blue-800 p-3 px-6 text-lg text-white;
}
.pagination .active button {
  @apply bg-blue-900;
}
</style>
