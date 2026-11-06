import { Page, Locator } from '@playwright/test';

export class TripSearchPage {
  readonly page: Page;
  readonly fromInput: Locator;
  readonly toInput: Locator;
  readonly searchButton: Locator;
  readonly resultsHeading: Locator;

  constructor(page: Page) {
    this.page = page;
    this.fromInput = page.getByLabel('From');
    this.toInput = page.getByLabel('To');
    this.searchButton = page.getByRole('button', { name: 'Search' });
    this.resultsHeading = page.getByRole('heading', { name: 'Available trips' });
  }

  async open() {
    await this.page.goto('/trips');
  }

  async search(from: string, to: string) {
    await this.fromInput.fill(from);
    await this.toInput.fill(to);
    await this.searchButton.click();
  }
}
