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
    await page.getByPlaceholder('Search').fill('playwright');
    await page.getByLabel('Onboarding Status').selectOption('In Progress');
    await page.getByRole('button', { name: 'Search' }).click();
    await expect(page.locator('td:nth-child(2)').first()).toBeVisible();
  });

  test('Visit Client Page and Create a Class Balance Account Holder (Organization Type)', async ({ page }) => {
    await page.goto('https://jrpaydev.b2clogin.com/login-dev.jackrabbitpay.com/b2c_1_signin/oauth2/v2.0/authorize?client_id=324b30c4-bc42-4015-a57f-e99fef950078&scope=openid%20profile%20offline_access&redirect_uri=https%3A%2F%2Fapp-dev.jackrabbitpay.com%2F&client-request-id=937a9e42-1d9f-4c21-908f-213769aabe84&response_mode=fragment&response_type=code&x-client-SKU=msal.js.browser&x-client-VER=2.32.1&client_info=1&code_challenge=3n_NHJJRBz9WsH-cvV-qbncK4jvVoZ8ObY8PWNgrn7o&code_challenge_method=S256&nonce=7c43df25-fb49-4f5d-a85e-44e5127e543d&state=eyJpZCI6IjZiMGM4MDdiLWFiNjgtNDRiNy1iMTNiLWFmODEwOTAzOGI1NCIsIm1ldGEiOnsiaW50ZXJhY3Rpb25UeXBlIjoicmVkaXJlY3QifX0%3D');

    await page.fill('input[type="email"]', 'sebastiandario.rodriguez+15@endava.com');
    await page.fill('input[type="password"]', 'endava1!');
    await page.getByRole('button', { name: 'Sign in' }).click();

    //Create a Class Balance Account Holder (Organization Type)
    await page.getByText('Clients').click();
    await expect(page.getByRole('heading', { name: 'Clients' })).toBeVisible();
    await page.getByRole('button', { name: 'Create New Client' }).click();
    await page.locator('div.cursor-pointer:nth-child(2)').click();
    await expect(page.getByRole('heading', { name: 'Create New Client' })).toBeVisible();
    await page.getByLabel('Edition').selectOption('Class');
    const randomNumber = Math.floor(Math.random() * 10000)
    await page.getByPlaceholder('Jackrabbit Id').fill(`Playwright${randomNumber}`);
    await page.getByLabel('Legal Entity Type').selectOption('Organization');
    await page.getByLabel('Country').selectOption('United States');
    // Wait for 2 seconds
    //await page.waitForTimeout(2000);
    await page.getByLabel('Timezone').selectOption('Mountain Standard Time');
    await page.getByLabel('Legal Name').fill(`Playwright${randomNumber}`);
    await page.getByText('Balance Platform').selectOption('JackrabbitTechnologies_BalancePlatform_TEST');
    await page.getByLabel('Organization Type').selectOption('Association Incorporated');
    await page.getByPlaceholder('First Name').fill('Playwright');
    await page.getByPlaceholder('Last Name').fill('Rodriguez');
    await page.getByPlaceholder('Email').fill('sebastiandario.rodriguez@endava.com');
    await page.getByPlaceholder('Phone').fill('9108213456');
    await page.getByPlaceholder('Address 1').fill('1234 Test St');
    await page.getByPlaceholder('Address 2').fill('12th floor');
    await page.getByPlaceholder('City').fill('Denver');
    await page.getByLabel('State/Province').selectOption('North Carolina');
    await page.getByPlaceholder('Postal Code').fill('28202');
    await page.getByText('Create New ClientAccount').click();
    await page.getByRole('button', { name: 'Create', exact: true }).click();

    //Invite a User
    await expect(page.getByTestId('success-icon')).toBeVisible();
    await expect(page.getByText('Account holder has been')).toBeVisible();
    await expect(page.getByText('Please invite the user to')).toBeVisible();
    await page.getByText('User email', { exact: true }).fill(`sebastiandario.rodriguez+${randomNumber}@endava.com`);
    await page.getByPlaceholder('Confirm user email').fill(`sebastiandario.rodriguez+${randomNumber}@endava.com`);
    await page.getByText('Create New ClientAccount').click();
    // Wait for 5 seconds
    //await page.waitForTimeout(5000);
    await page.getByRole('button', { name: 'Invite'}).click();

    //Sing Up
    await expect(page.getByText('Sign Up')).toBeVisible();
    await page.getByLabel('Role').selectOption('Owner');
    await page.getByText('Sign UpEmail AddressFirst').click();
    await page.getByRole('button', { name: 'Invite'}).click();
    await expect(page.getByTestId('success-icon')).toBeVisible();
    await expect(page.getByText('To complete the onboarding')).toBeVisible();
    await page.getByRole('button', { name: 'Close' }).click();

  });