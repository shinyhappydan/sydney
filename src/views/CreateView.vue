<template>
  <div>
    <h2>Create a recipe</h2>
    <form >
      <input v-model="name" type="text" placeholder="Name" />
      <button @click="persist">Submit</button>
    </form>
  </div>
</template>

<style>
</style>

<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipeStore.ts'
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const { add } = useRecipeStore()

const name = ref('')

const persist = () => {
  add({ name: name.value })
  router.push('/')
}
</script>
