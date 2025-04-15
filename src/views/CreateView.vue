<template>
  <div class="about">
    <h1>Create a recipe</h1>
    <form>
      <input v-model="name" type="text" placeholder="Name" />
      <button @click="persist">Submit</button>
    </form>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipeStore.ts'
import { ref } from 'vue'
import router from '@/router'

const { add } = useRecipeStore()

const name = ref('')

const persist = () => {
  add({ name: name.value })
  router.push('/')
}
</script>
