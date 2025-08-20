import { test, expect } from "@playwright/test";

test("Invalid Google Login attempt", async ({ page }) => {
  await page.goto("https://tradenation.com/markets/#forex");

  const acceptCookies = page.getByRole("button", {
    name: "Accept all cookies",
  });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
  await page.getByRole("link", { name: "Sign up / Log in" }).click();

  await page.getByRole("link", { name: "Log in here" }).click();

  await page.getByRole("button", { name: "Log in with Google" }).click();

  const emailField = page.getByRole("textbox", { name: "Email or phone" });
  await expect(emailField).toBeVisible();
  await emailField.fill("test@gmail.com");

  await page.getByRole("button", { name: "Next" }).click();

  const tryAgainLink = page.getByRole("link", { name: "Try again" });
  await expect(tryAgainLink).toBeVisible();
  await tryAgainLink.click();
});
