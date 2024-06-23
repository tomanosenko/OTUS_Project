// @ts-check
// Демо-тесты
const { test, expect } = require('@playwright/test')

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/')

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/)
})

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/')

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click()

  // Expects page to have a heading with the name of Installation.
  await expect(
    page.getByRole('heading', { name: 'Installation' }),
  ).toBeVisible()
})

// Мои тесты для https://www.wildberries.ru/

test('Просмотр существующих платьев и сарафанов с помощью кнопки навигации по сайту', async ({
  page,
}) => {
  await page.goto('https://www.wildberries.ru/')
  await page.getByLabel('Навигация по сайту').click()
  await page.getByText('Женщинам').first().click()
  await page.getByRole('link', { name: 'Платья и сарафаны' }).click()
  await expect(
    page.getByRole('heading', { name: 'Женские платья' }),
  ).toBeVisible()
})

test('Просмотр существующих чайников с помощью поисковой строки', async ({
  page,
}) => {
  await page.goto('https://www.wildberries.ru/')
  await page.getByRole('searchbox', { name: 'Найти на Wildberries' }).click()
  await page
    .getByRole('searchbox', { name: 'Найти на Wildberries' })
    .fill('чайники')
  await page.getByLabel('Поиск товара').click()
  await expect(page.getByRole('heading', { name: 'чайники' })).toBeVisible()
})

test('Можно искать с помощью фильтра', async ({ page }) => {
  await page.goto('https://www.wildberries.ru/')
  await page.getByRole('searchbox', { name: 'Найти на Wildberries' }).click()
  await page
    .getByRole('searchbox', { name: 'Найти на Wildberries' })
    .fill('кроссовки')
  await page.getByLabel('Поиск товара').click()
  await page.getByRole('button', { name: 'Все фильтры' }).click()
  await expect(page.getByRole('heading', { name: 'Фильтры' })).toBeVisible()
})

test('При добавлении в товара в корзину, требуется указать его размер', async ({
  page,
}) => {
  await page.goto('https://www.wildberries.ru/')
  await page.getByRole('searchbox', { name: 'Найти на Wildberries' }).click()
  await page
    .getByRole('searchbox', { name: 'Найти на Wildberries' })
    .fill('кроссовки')
  await page
    .getByRole('searchbox', { name: 'Найти на Wildberries' })
    .press('Enter')
  await page.getByLabel('Кроссовки унисекс Amina shoes').click()
  await page.getByRole('button', { name: 'Добавить в корзину' }).click()
  await expect(
    page.getByRole('heading', { name: 'Выберите размер' }),
  ).toBeVisible()
})

test('Успешное добавление товара в корзину и удаление из неё', async ({
  page,
}) => {
  await page.goto('https://www.wildberries.ru/')
  await page.getByRole('searchbox', { name: 'Найти на Wildberries' }).click()
  await page
    .getByRole('searchbox', { name: 'Найти на Wildberries' })
    .fill('чайники')
  await page
    .getByRole('searchbox', { name: 'Найти на Wildberries' })
    .press('Enter')
  await page.getByLabel('Чайник электрический стеклянный 2 л KONONO').click()
  await page.getByRole('button', { name: 'Добавить в корзину' }).click()
  await page.getByRole('link', { name: 'Перейти в корзину' }).click()
  await expect(page.getByText('1 товар').nth(1)).toBeVisible()
  await page.getByRole('button', { name: 'Удалить' }).click()
  await expect(
    page.getByRole('heading', { name: 'В корзине пока пусто' }),
  ).toBeVisible()
})
