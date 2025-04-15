import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Recipe } from '@/types/recipe.ts'

export const useRecipeStore = defineStore('recipes', () => {
  const recipes = useStorage<Recipe[]>('recipes', [])

  const add = (recipe: Recipe) => {
    recipes.value.push(recipe)
  }

  return {
    add,
    recipes: recipes.value,
  }
})
