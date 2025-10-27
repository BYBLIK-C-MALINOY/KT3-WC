import { expect, test } from '@playwright/test'

const path = '/iframe.html?globals=&args=&id=components-button--icon-button'

test.beforeEach(async ({ page }) => {
  await page.goto(path)
})

test('компонент соответствует снэпшоту', async ({ page }) => {
  const root = page.locator('#storybook-root button')

  const innerHTML = (await root.innerHTML());

  expect(innerHTML).toMatchSnapshot()
})

test('компонент соответствует скриншоту', async ({ page }) => {
  const root = page.locator('#storybook-root button')

  await expect(root).toHaveScreenshot()
});
