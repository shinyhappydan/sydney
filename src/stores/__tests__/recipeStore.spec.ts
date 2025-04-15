import { beforeEach, describe, expect, it } from 'vitest'
import { useRecipeStore } from '@/stores/recipeStore.ts'
import { createPinia, setActivePinia } from 'pinia'

describe('recipeStore', () => {
  beforeEach(() => {
    localStorage.clear()
    setActivePinia(createPinia())
  })

  const recipe = (name: string) => {
    return { name: name }
  }

  it('stores and retrieves a recipe', () => {
    const store = useRecipeStore()

    store.add(recipe('Banana bread'))

    expect(store.recipes()).toContainEqual(recipe('Banana bread'))
  })

  it('clears the store', () => {
    const store = useRecipeStore()

    store.add(recipe('Banana bread'))
    store.clear()

    expect(store.recipes()).empty
  })
})
