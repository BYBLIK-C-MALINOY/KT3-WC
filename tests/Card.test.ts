import { expect, test } from '@playwright/test';

const path = '/iframe.html?args=&globals=&id=components-card--card-default';

test.beforeEach(async ({ page }) => {
  await page.goto(path);
});

test('компонент определён', async ({ page }) => {
  const componentElement = page.locator('card-component');
  expect(componentElement).toBeDefined();
});

test('карточка содержит заголовок h3', async ({ page }) => {
  const titleElement = page.locator('h3');
  await expect(titleElement).toBeVisible();
});

test('карточка содержит заголовок с текстом Food', async ({ page }) => {
  const titleElementText = await page.locator('h3').innerText();
  expect(titleElementText).toBe('Food');
});

test('карточка содержит параграф с текстом Lorem...', async ({ page }) => {
  const paragraph = page.locator('p');
  await expect(paragraph).toBeVisible();

  const text = await paragraph.innerText();
  expect(text.startsWith('Lorem')).toBeTruthy();
});

test('карточка содержит ссылку с текстом Read и ссылкой на ya.ru', async ({ page }) => {
  const link = page.locator('a');

  await expect(link).toBeVisible();
  await expect(link).toHaveText('Read');
  await expect(link).toHaveAttribute('href', 'https://ya.ru');
});

test('в слот image подставлено изображение', async ({ page }) => {
  const cardComponent = page.locator('card-component');
  const imageElement = cardComponent.locator('img[slot="image"]');

  await expect(imageElement).toBeVisible();
  await expect(imageElement).toHaveAttribute('src', /.+/);
});

test('в слот title подставлен заголовок', async ({ page }) => {
  const cardComponent = page.locator('card-component');
  const titleElement = cardComponent.locator('h3[slot="title"]');

  await expect(titleElement).toBeVisible();
  const tagName = await titleElement.evaluate((el) => el.tagName.toLowerCase());
  expect(tagName).toBe('h3');
});

test('в слот content подставлен параграф', async ({ page }) => {
  const cardComponent = page.locator('card-component');
  const paragraph = cardComponent.locator('p[slot="content"]');

  await expect(paragraph).toBeVisible();
  const tagName = await paragraph.evaluate((el) => el.tagName.toLowerCase());
  expect(tagName).toBe('p');
});

test('в слот ui подставлена ссылка', async ({ page }) => {
  const cardComponent = page.locator('card-component');
  const link = cardComponent.locator('a[slot="ui"]');

  await expect(link).toBeVisible();
  const tagName = await link.evaluate((el) => el.tagName.toLowerCase());
  expect(tagName).toBe('a');
});
