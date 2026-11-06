import { test, expect } from '@playwright/test';
import { TripSearchPage } from '../pages/TripSearchPage';

test('user can search trips from Kathmandu to Pokhara', async ({ page }) => {
  const tripSearchPage = new TripSearchPage(page);

  await tripSearchPage.open();
  await tripSearchPage.search('Kathmandu', 'Pokhara');

  await expect(tripSearchPage.resultsHeading).toBeVisible();
});
