<script setup lang="ts">
import { useRecipeStore } from '@/stores/recipeStore.ts'

const store = useRecipeStore()
</script>

<template>
  <ul>
    <li v-for="recipe in store.recipes()" v-bind:key="recipe.name">
      {{ recipe.name }}
    </li>
  </ul>
</template>

<style scoped>

</style>
