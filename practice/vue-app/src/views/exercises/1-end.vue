<script setup>
import { ref } from "vue";
const name = ref("Bootcampers");
const item = ref("coffee");
</script>
<template>
  <div class="viewport-center">
    <div>
      <label class="block"
        >Name:

        <input type="text" v-model="name" class="input" />
      </label>
      <label class="block">
        Item:
        <input type="text" v-model="item" class="input" />
      </label>
      <hr />

      <div class="mt-5">Hello {{ name }}! Do you like {{ item }}?</div>
    </div>
  </div>
</template>
