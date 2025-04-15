<script setup lang="ts">
import { useRecipeNames } from '@/stores/recipeStore.ts'

const recipeNames = useRecipeNames()
</script>

<template>
  <ul>
    <li v-for="recipeName in recipeNames" v-bind:key="recipeName">
      {{ recipeName }}
    </li>
  </ul>
</template>

<style scoped>

</style>
