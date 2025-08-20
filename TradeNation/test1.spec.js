import { test, expect } from "@playwright/test";

test("test", async ({ page }) => {
  await page.goto("https://tradenation.com/markets/#forex");
  const acceptCookies = page.getByRole("button", {
    name: "Accept all cookies",
  });
  if (await acceptCookies.isVisible()) {
    await acceptCookies.click();
  }
  await page.getByTestId("logo").click();
  await expect(page.getByText("Harness the power")).toBeVisible();
});
