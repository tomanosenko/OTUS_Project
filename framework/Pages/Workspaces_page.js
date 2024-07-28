export async function WorkspacesPage({ page }) {
  const clickWorkspaceKebabMenu = async () => {
    await page.locator('(//span[contains(@class, "touch-target")])[4]').click()
  }

  const clickAddWs = async () => {
    await page.locator('(//span[contains(@class, "label")])[5]').click()
  }

  const fillWsName = async name => {
    await page.locator('(//input)[2]').fill(name)
  }

  const ClickAddWs = async name => {
    await page.locator('(//span[contains(@class, "touch-target")])[4]').click()
  }

  const clickDelete = async () => {
    await page
      .locator('(//span[contains(@class, "mat-mdc-menu-item-text")])[5]')
      .click()
  }

  const fillDelete = async () => {
    await page
      .locator('//input[contains(@placeholder, "Please confirm by typing")]')
      .fill('delete')
  }

  const ClickDelete = async () => {
    await page
      .locator('(//span[contains(@class, "button-touch-target")])[5]')
      .click()
  }

  const AddWs = async name => {
    await clickAddWs()
    await fillWsName('Test')
    await ClickAddWs()
  }

  const DeleteWs = async name => {
    await clickDelete()
    await fillDelete()
    await ClickDelete()
  }

  return {
    clickWorkspaceKebabMenu,
    clickAddWs,
    fillWsName,
    ClickAddWs,
    AddWs,
    clickDelete,
    fillDelete,
    ClickDelete,
    DeleteWs,
  }
}
