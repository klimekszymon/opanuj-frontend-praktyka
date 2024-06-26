<script setup lang="ts">
import { onMounted } from 'vue'
import validator from './useValidation'
onMounted(() => {
    validator()
})

</script>

<template>
    <div class="bg-gray-100 p-4">

        <div class="max-w-4xl mx-auto">
            <div class="flex flex-col">
                <input class="rounded-md p-4 shadow-lg" type="number" min="0" max=100 id="input"
                    placeholder="Enter a number between 0 and 100" />
                <div class="grid grid-cols-2 gap-x-2">
                    <button class="rounded-md text-lg bg-blue-200 hover:bg-blue-800 hover:text-white p-4 mt-4"
                        id="validate">
                        Validate It!
                    </button>
                    <button class="rounded-md text-lg bg-red-200 hover:bg-red-800 hover:text-white p-4 mt-4" id="clear">
                        Clear!
                    </button>
                </div>
                <div class="text-lg mt-4" id="result"></div>
            </div>
        </div>
    </div>

</template>

<style scoped></style>