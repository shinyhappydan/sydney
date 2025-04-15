import { beforeEach, describe, expect, it } from 'vitest'
import { useRecipeStore } from '@/stores/recipeStore.ts'
import { createPinia, setActivePinia } from 'pinia'

describe('recipeStore', () => {
  beforeEach(() => {
    localStorage.clear() // the test shouldn't need to know local storage is being used, but clearing the store in other ways did not work
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
})
