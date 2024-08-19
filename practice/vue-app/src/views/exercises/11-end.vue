<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import UserProfileCard from "@/components/end/UserProfileCard.vue";
import UserProfileCardEdit from "@/components/end/UserProfileCardEdit.vue";

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

function keyboardShortcuts(e) {
  if (e.key === "Escape") {
    e.preventDefault();
    editing.value = false;
  }
  if (e.key === "e" && e.metaKey) {
    e.preventDefault();
    editing.value = true;
  }
}

onMounted(() => {
  window.addEventListener("keydown", keyboardShortcuts);
});

onUnmounted(() => {
  window.removeEventListener("keydown", keyboardShortcuts);
});
</script>
<template>
  <div class="viewport-center">
    <div>
      <Transition>
        <UserProfileCardEdit
          v-if="editing"
          v-bind="user"
          @saved="
            user = $event;
            editing = false;
          "
        />
        <UserProfileCard v-else v-bind="user" />
      </Transition>
      <button @click="editing = !editing" class="edit-button">
        {{ editing ? "Cancel" : "Edit" }}
      </button>
    </div>
  </div>
</template>

<style scoped>
.edit-button {
  @apply bg-gray-200 dark:bg-gray-700 dark:text-white px-2 py-1 rounded block mt-2 w-full max-w-xs;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.25s ease;
  transform-style: preserve-3d;
}

.v-enter-active {
  transition: all 0.25s ease 0.25s;
  transform-style: preserve-3d;
}

.v-enter-from,
.v-leave-to {
  /* opacity: 0; */
  transform: rotateY(90deg);
  backface-visibility: hidden;
  position: absolute;
}
</style>
