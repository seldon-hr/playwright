import { test, expect } from '@playwright/test';


/* Testing with the url uiTestingplayground */

test('Accediendo a Sitio UiTestingPlayground', async ({ page }) => {
  await page.goto('http://uitestingplayground.com/');
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Click' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
  await page.getByRole('link', { name: 'Text Input' }).click();
  await page.getByRole('textbox', { name: 'Set New Button Name' }).click();
  await page.getByRole('textbox', { name: 'Set New Button Name' }).fill('My name button');
  await page.getByRole('button', { name: 'Button That Should Change it\'' }).click();
  await page.getByRole('button', { name: 'My name button' }).click();
  await page.getByRole('link', { name: 'Home' }).click();
});