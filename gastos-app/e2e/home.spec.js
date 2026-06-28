import { test, expect } from '@playwright/test';

test('la página principal carga', async ({ page }) => {
  await page.goto('http://localhost:4321');
  await expect(page).toHaveTitle(/.*/);
});
