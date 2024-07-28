
import { test, expect } from '@playwright/test';
import { AuthPage } from '../framework/Pages/Auth_Page';
import { TenantPage } from '../framework/Pages/Tenant_Page'
import { TenantInfoPage } from '../framework/Pages/TenantInfo_Page'
import { WorkspacesPage } from '../framework/Pages/Workspaces_Page'

test.describe('Тесты для платформы Tantor', async () => {
  test.beforeEach(async ({ page }) => {
    const LoginPage = await AuthPage({ page });
    await LoginPage.login();
  });

  test('Успешный вход', async ({page}) => {
    await expect(page.locator('//div[text()="Tenant name"]')).toBeVisible();
  });

  test("На страницу рабочих пространств можно попасть, кликнув на тенант", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickTheTenant();
    await expect(page.locator("//span[contains(@class,'text-label')]").first()).toBeVisible();
  });

  test("На страницу рабочих пространств можно попасть, выбрав опцию из кебаб-меню", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickTenantKebabMenu();
    await tenantPage.clickOpenTenant();
    await expect(page.locator('//span[contains(@class,"text-label")]').first()).toBeVisible();
  });

  test("У владельца тенанта есть возможность изъять права у другого владельца тенанта или сбросить его пароль", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickTenantKebabMenu();
    await tenantPage.clickMoreInformation();
    const tenaninfotPage = await TenantInfoPage({page});
    await tenaninfotPage.clickOwnerKebabMenu();
    await expect(page.locator('(//span[@class="mat-mdc-menu-item-text"])[1]')).toBeVisible();
    await expect(page.locator('(//span[@class="mat-mdc-menu-item-text"])[2]')).toBeVisible();
  });

  test("Нельзя удалить тенант, в котором есть рабочие пространства", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickTenantKebabMenu();
    await tenantPage.clickDelete();
    await expect(page.locator('//span[contains(@class, "dialog")]').first()).toBeVisible();
  });

  test("Пользователь, обладающий правами владельца тенанта, может добавить нового владельца тенанта", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickTenantKebabMenu();
    await tenantPage.clickMoreInformation();
    const tenaninfotPage = await TenantInfoPage({page});
    await tenaninfotPage.clickAddTenantOwner();
    await expect(page.locator('//span[contains(@class, "title")]')).toBeVisible();
  });

  test("Можно найти владельца по его почте", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickTenantKebabMenu();
    await tenantPage.clickMoreInformation();
    const tenaninfotPage = await TenantInfoPage({page});
    await tenaninfotPage.Search()
    await expect(page.locator('//td[contains(@class, "userName")]')).toBeVisible();
  });
  
  test("Пользователь, обладающий правами владельца тенанта, может создать новое рабочее пространство", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickTheTenant();
    const wspage = await WorkspacesPage({page});
    await wspage.AddWs();
    await expect(page.locator(`//p[@title="Test"]`)).toBeVisible();
  });

  test("Пользователь, обладающий правами владельца тенанта, может удалить рабочее пространство", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickTheTenant();
    const wspage = await WorkspacesPage({page});
    await wspage.clickWorkspaceKebabMenu();
    await wspage.DeleteWs();
    await expect(page.locator('//p[@title="Test"]')).not.toBeVisible();
  });

  test("Пользователь, обладающий правами владельца тенанта, может создать новый тенант", async({page}) => {
    const tenantPage = await TenantPage({page});
    await tenantPage.clickAddTenant();
    await expect(page.locator('//span[contains(@class, "dialog")]')).toBeVisible();
  });

});
