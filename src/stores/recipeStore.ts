import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'
import type { Recipe } from '@/types/recipe.ts'

export const useRecipeStore = defineStore('recipes', () => {
  const state = useStorage<Recipe[]>('recipes', [])

  const add = (recipe: Recipe) => {
    state.value.push(recipe)
  }

  const recipes = () => state.value

  const clear = () => state.value = []

  return {
    add,
    recipes,
    clear,
  }
})
