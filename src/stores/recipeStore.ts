import { defineStore } from 'pinia'
import { useStorage } from '@vueuse/core'

type Recipe = {
  name: string
}

export const useRecipeStore = defineStore('recipes', () => {
  const recipes = useStorage<Recipe[]>('recipes', [])

  const add = (recipe: Recipe) => {
    recipes.value.push(recipe)
  }

  const clear = () => recipes.value = null

  return {
    add,
    recipes: recipes.value,
    clear,
  }
})
