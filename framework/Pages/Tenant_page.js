export async function TenantPage({ page }) {
  const clickTenantKebabMenu = async () => {
    await page
      .locator('(//span[@class="mat-mdc-button-touch-target"])[2]')
      .click()
  }

  const clickOpenTenant = async () => {
    await page.locator('//button[@role="menuitem"]').first().click()
  }

  const clickTheTenant = async () => {
    await page.locator('//td[contains(@class, "workspaceCount")]').click()
  }

  const clickAddTenant = async () => {
    await page.locator('//span[contains(@class, "label")]').click()
  }

  const clickDelete = async name => {
    await page.locator('(//button[@role="menuitem"])[4]').click()
  }

  const clickMoreInformation = async () => {
    await page.locator('(//button[@role="menuitem"])[3]').click()
  }

  return {
    clickTenantKebabMenu,
    clickOpenTenant,
    clickTheTenant,
    clickAddTenant,
    clickDelete,
    clickMoreInformation,
  }
}
