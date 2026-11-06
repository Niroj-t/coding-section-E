import { test, expect } from '@playwright/test';

test.describe('login with invalid credentials', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('shows an error for a wrong password', async ({ page }) => {
    await page.getByLabel('Email').fill('trainee@example.test');
    await page.getByLabel('Password').fill('wrong-password');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await expect(page.getByText('Email or password is incorrect')).toBeVisible();
  });

});
