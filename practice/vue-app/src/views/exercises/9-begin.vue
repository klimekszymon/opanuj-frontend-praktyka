<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import UserProfileCard from "@/components/end/UserProfileCard.vue";
import UserProfileCardEdit from "@/components/end/UserProfileCardEdit.vue";
import CardShortcuts from "@/components/internal/CardShortcuts.vue";

const user = ref({
  avatar: "https://i.pravatar.cc/150?img=6",
  username: "dudemcface",
  bio: "I'm a software engineer focused on delivering unique and engaging experiences.",
  name: {
    first: "Dude",
    last: "McFace",
  },
  skills: ["JavaScript", "Vue", "React", "Node"],
  pro: true,
});

const editing = ref(false);
</script>
<template>
  <div class="viewport-center">
    <div>
      <UserProfileCardEdit
        v-if="editing"
        v-bind="user"
        @saved="user = $event"
      />
      <UserProfileCard v-else v-bind="user" />

      <button @click="editing = !editing" class="edit-button">
        {{ editing ? "Cancel" : "Edit" }}
      </button>

      <CardShortcuts />
    </div>
  </div>
</template>

<style scoped>
.edit-button {
  @apply bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-1 rounded block mt-2 w-full max-w-xs;
}
</style>
