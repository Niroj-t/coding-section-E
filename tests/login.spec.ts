import { test, expect } from '@playwright/test';

test('user can sign in with valid credentials', async ({ page }) => {
  await page.goto('/login');

  await page.getByLabel('Email').fill('trainee@example.test');
  await page.getByLabel('Password').fill('valid-password');
  await page.getByRole('button', { name: 'Sign in' }).click();

  await expect(page).toHaveURL(/\/account/);
  await expect(page.getByRole('heading', { name: 'Your account' })).toBeVisible();
});
