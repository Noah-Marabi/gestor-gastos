// Test End-to-End con Playwright
// Simula el comportamiento de un usuario utilizando la aplicación
import { test, expect } from '@playwright/test';

test('la página principal carga', async ({ page }) => {
  await page.goto('http://localhost:4321');
  await expect(page).toHaveTitle(/.*/);
});
