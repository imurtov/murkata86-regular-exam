const { test, expect } = require('@playwright/test');

test('Check books page', async ({ page }) => {
    await page.goto('http://localhost:8083/books');
    const list = await page.$('ul');
    expect(list).toBeTruthy();
  });
  