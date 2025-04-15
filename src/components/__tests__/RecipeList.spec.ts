import { describe, it, expect, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import { useRecipeStore } from '@/stores/recipeStore.ts'
import RecipeList from '@/components/RecipeList.vue'
import { createPinia, setActivePinia } from 'pinia'

describe('RecipeList', () => {
  beforeEach(() => {
    localStorage.clear() // the test shouldn't need to know local storage is being used, but clearing the store in other ways did not work
    setActivePinia(createPinia())
  })

  const thereIsARecipe = (name: string) => {
    useRecipeStore().add({ name: name })
  }

  const recipeList = () => {
    return mount(RecipeList)
  }

  it('renders a recipe', () => {
    thereIsARecipe('Banana bread')

    expect(recipeList().text()).toContain('Banana bread')
  })

  it('renders multiple recipes', () => {
    thereIsARecipe('Carrot cake')
    thereIsARecipe('Thai green curry')

    expect(recipeList().text()).to.contain('Carrot cake').and.contain('Thai green curry')
  })
})
