<script setup>
import { onMounted, ref, computed, onUnmounted } from "vue";
const el = ref();

const numOfSlides = 10;
const activeSlide = ref(1);
const elWidth = ref(0);
const speed = 3000;

onMounted(() => {
  setElWidth();
  window.addEventListener("resize", setElWidth);
});

function setElWidth() {
  if (!el.value) return;
  elWidth.value = el.value.clientWidth;
}

function rotateSlide() {
  if (activeSlide.value === numOfSlides) {
    activeSlide.value = 1;
  } else {
    activeSlide.value++;
  }
}

const translateX = computed(() => {
  if (!el.value) return;
  return `translateX(-${elWidth.value * (activeSlide.value - 1)}px)`;
});

let interval;
const play = () => (interval = setInterval(rotateSlide, speed));
const stop = () => clearInterval(interval);

play();

onUnmounted(() => {
  window.removeEventListener("resize", setElWidth);
  stop();
});
</script>
<template>
  <div class="flex items-center justify-center h-screen px-5">
    <div class="slides-wrapper" ref="el">
      <img
        v-for="n in numOfSlides"
        :key="n"
        :src="`https://i.pravatar.cc/1200?img=${n}`"
        class="slide"
        :style="{ transform: translateX }"
        @mouseenter="stop()"
        @mouseleave="play()"
      />
    </div>
  </div>
</template>

<style scoped>
.slide {
  @apply object-cover w-full transition-all duration-700 block;
}
.slides-wrapper {
  @apply flex overflow-hidden rounded max-w-[600px];
}
</style>
