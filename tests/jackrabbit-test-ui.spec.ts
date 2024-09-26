import { test, expect } from '@playwright/test';

test('Login', async ({ page }) => {
    await page.goto('https://jrpaydev.b2clogin.com/login-dev.jackrabbitpay.com/b2c_1_signin/oauth2/v2.0/authorize?client_id=324b30c4-bc42-4015-a57f-e99fef950078&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp-dev.jackrabbitpay.com%2F&client-request-id=937a9e42-1d9f-4c21-908f-213769aabe84&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.32.1&client_info=1&code_challenge=3n_NHJJRBz9WsH-cvV-qbncK4jvVoZ8ObY8PWNgrn7o&code_challenge_method=S256&nonce=7c43df25-fb49-4f5d-a85e-44e5127e543d&state=eyJpZCI6IjZiMGM4MDdiLWFiNjgtNDRiNy1iMTNiLWFmODEwOTAzOGI1NCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D');

    await page.fill('input[type="email"]', 'sebastiandario.rodriguez+15@endava.com');
    await page.fill('input[type="password"]', 'endava1!');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect('Jackrabbit Pay Logo').toBe('Jackrabbit Pay Logo');
  });

  test('Visit Client Page and Make a Search', async ({ page }) => {
    await page.goto('https://jrpaydev.b2clogin.com/login-dev.jackrabbitpay.com/b2c_1_signin/oauth2/v2.0/authorize?client_id=324b30c4-bc42-4015-a57f-e99fef950078&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp-dev.jackrabbitpay.com%2F&client-request-id=937a9e42-1d9f-4c21-908f-213769aabe84&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.32.1&client_info=1&code_challenge=3n_NHJJRBz9WsH-cvV-qbncK4jvVoZ8ObY8PWNgrn7o&code_challenge_method=S256&nonce=7c43df25-fb49-4f5d-a85e-44e5127e543d&state=eyJpZCI6IjZiMGM4MDdiLWFiNjgtNDRiNy1iMTNiLWFmODEwOTAzOGI1NCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D');

    await page.fill('input[type="email"]', 'sebastiandario.rodriguez+15@endava.com');
    await page.fill('input[type="password"]', 'endava1!');
    await page.getByRole('button', { name: 'Sign in' }).click();
    await expect('Jackrabbit Pay Logo').toBe('Jackrabbit Pay Logo');

    await page.getByText('Clients').click();
    await expect(page.getByRole('heading', { name: 'Clients' })).toBeVisible();
    await page.getByPlaceholder('Search').fill('cypress');
    await page.getByLabel('Onboarding Status').selectOption('In Progress');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.getByText('Cypress5263', { exact: true })).toBeVisible();
  });

  test('Visit Client Page and Create a Class Balance Account Holder (Organization Type)', async ({ page }) => {
    await page.goto('https://jrpaydev.b2clogin.com/login-dev.jackrabbitpay.com/b2c_1_signin/oauth2/v2.0/authorize?client_id=324b30c4-bc42-4015-a57f-e99fef950078&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp-dev.jackrabbitpay.com%2F&client-request-id=937a9e42-1d9f-4c21-908f-213769aabe84&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.32.1&client_info=1&code_challenge=3n_NHJJRBz9WsH-cvV-qbncK4jvVoZ8ObY8PWNgrn7o&code_challenge_method=S256&nonce=7c43df25-fb49-4f5d-a85e-44e5127e543d&state=eyJpZCI6IjZiMGM4MDdiLWFiNjgtNDRiNy1iMTNiLWFmODEwOTAzOGI1NCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D');

    await page.fill('input[type="email"]', 'sebastiandario.rodriguez+15@endava.com');
    await page.fill('input[type="password"]', 'endava1!');
    await page.getByRole('button', { name: 'Sign in' }).click();

    await page.getByText('Clients').click();
    await expect(page.getByRole('heading', { name: 'Clients' })).toBeVisible();
  });