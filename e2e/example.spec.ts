import { test, expect } from '@playwright/test';

test('shows the Next.js deployment', async ({ page }) => {
  await page.goto('/')
  await page.waitForSelector('text=Welcome to Next.js!');
});

test('can show data from the backend', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('text=Hello from the backend!');
})
