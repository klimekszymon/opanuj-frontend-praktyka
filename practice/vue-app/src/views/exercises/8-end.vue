<script setup>
import { ref } from "vue";
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

const alert = (msg) => window.alert(msg);
</script>
<template>
  <div class="viewport-center">
    <UserProfileCard
      v-bind="user"
      class="mr-5"
      @message="alert(`You messaged ${user.name.first} ${user.name.last}`)"
    />
    <UserProfileCardEdit v-bind="user" @saved="user = $event" />
  </div>
</template>

<style scoped></style>
