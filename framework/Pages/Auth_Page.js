import { config } from '../config'

export async function AuthPage({ page }) {

  const visit = async () => {
    await page.goto(`${config.baseUrl}login`)    
  }

  const fillEmail = async (email) => {
    await page.locator('[placeholder="Email or username in UPN format"]').fill(email);
  }

  const fillPassword = async (password) => {
    await page.locator('[placeholder="Password"]').fill(password);
  }

  const clickLogin = async () => {
    await page.locator('//span[text()="Login"]').click();
  }

  const login = async () => {
    await visit();
    await fillEmail(config.baseEmail);
    await fillPassword(config.basePassword);
    await clickLogin();
  }

  return {
   visit,
   fillEmail,
   fillPassword,
   clickLogin,
   login,
  }
}
