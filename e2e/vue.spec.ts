import { expect, test } from '@playwright/test'

test('visits the home page', async ({ page }) => {
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('Recipes')
})

test('creates a recipe', async ({ page }) => {
  await page.goto('/')
  await page.click('text=Create Recipe')
  await page.fill('input', 'banana bread')
  await page.click('text=Submit')
  await expect(page.locator('h1')).toHaveText('Recipes')
  await expect(page.getByText('banana bread')).toBeVisible()
})
