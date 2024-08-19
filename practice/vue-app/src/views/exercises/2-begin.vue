<script setup>
import { ref } from "vue";
// prettier-ignore
const users = ref([
  { id: 'f755ce63-8284-4304-bb7e-2449a57c39b9', name: 'Debra Hunt', avatar: 'https://i.pravatar.cc/150?img=1' },
  { id: 'debcef41-0a1e-4d57-a56f-f7064fa80e60', name: 'Michael Perkins', avatar: 'https://i.pravatar.cc/150?img=2' },
  { id: '4f51bc5e-0f57-4a0c-9de5-3df063316ce2', name: 'Jessica Martin', avatar: 'https://i.pravatar.cc/150?img=3' },
  { id: '3abaf52f-9ddf-451d-9107-e0edabbf3eff', name: 'Karen Clark', avatar: 'https://i.pravatar.cc/150?img=4' },
  { id: '9a079fca-16ac-401e-b26a-35b2b6158fe6', name: 'Nancy Green', avatar: null },
  { id: 'b08e12dd-8656-43e4-8b42-b54db36ce3fe', name: 'Audrey Williamson', avatar: 'https://i.pravatar.cc/150?img=6' },
  { id: '89d8ffb9-98be-48a2-9346-af167dc6685c', name: 'Cynthia Anderson', avatar: null },
  { id: '5222996a-e747-47cb-8e3c-f0171208e17b', name: 'Ryan Guzman', avatar: null },
  { id: '7fbee0ff-c831-44ed-b7bb-c8265cc4fa4f', name: 'Sean Bauer', avatar: 'https://i.pravatar.cc/150?img=9' },
  { id: '9c110067-2345-4f7f-89cc-b50cd02fd106', name: 'Ashley Fisher', avatar: 'https://i.pravatar.cc/150?img=10' }
]);
</script>
<template>
  <div class="viewport-center">
    <ul class="user-wrapper">
      <!-- User With Avatar -->
      <li class="user-card">
        <img class="avatar" src="https://i.pravatar.cc/150?img=1" />
        Debra Hunt
      </li>

      <!-- User Without Avatar -->
      <li class="user-card">
        <img class="avatar" src="/placeholder-avatar.jpg" />

        <!-- 💪 BONUS: Display their initials as the avatar instead of the placeholder -->
        <!-- <span class="avatar">NG</span> -->
        Nancy Green
      </li>
    </ul>
  </div>
</template>

<style scoped>
.user-wrapper {
  @apply flex flex-wrap gap-10 justify-center;
}
.user-card {
  @apply p-3 shadow-lg border border-slate-200 dark:border-slate-950 rounded w-80;
}
.avatar {
  @apply font-bold object-cover w-24 h-24 rounded-full mr-5 dark:bg-slate-700 bg-slate-200 inline-flex justify-center items-center text-3xl;
}
</style>
