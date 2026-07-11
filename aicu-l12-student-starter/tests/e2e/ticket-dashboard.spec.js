import { test, expect } from "@playwright/test";

import { createTicketApplication } from "../../server/app.js";

async function startApp() {
  const application = createTicketApplication({
    databasePath: ":memory:",
    seed: false,
    idFactory: () => "TCK-E2E-1"
  });

  await new Promise((resolve) => {
    application.server.listen(0, "127.0.0.1", resolve);
  });

  const address = application.server.address();
  return { application, baseUrl: `http://127.0.0.1:${address.port}` };
}

test("shows the server-calculated urgency label in the ticket list", async ({ page }) => {
  const { application, baseUrl } = await startApp();

  try {
    await page.goto(baseUrl);

    await page.getByLabel("Titolo").fill("Errore fattura");
    await page.getByLabel("Cliente").fill("Alfa S.r.l.");
    await page.getByRole("radio", { name: "normale" }).check();
    await page.getByRole("radio", { name: "email" }).check();
    await page.getByRole("button", { name: "Salva ticket" }).click();

    const row = page.locator("#ticket-table-body tr", { hasText: "Errore fattura" });
    await expect(row.locator(".server-value")).toHaveText("standard");
  } finally {
    await application.close();
  }
});
