<script setup lang="ts">
import RecipeList from '@/components/RecipeList.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const goToCreateRecipe = () => {
  router.push('/add')
}
</script>

<template>
  <div>
    <h2>Recipes</h2>
    <RecipeList />
    <button @click=goToCreateRecipe>Add Recipe</button>
  </div>
</template>
