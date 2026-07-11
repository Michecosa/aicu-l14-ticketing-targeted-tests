import { test } from "node:test";
import assert from "node:assert/strict";

import { buildTicket, postTicket, startTestApplication } from "../helpers/ticket-api.js";

test("sourceChannel 'whatsapp' produce 400 VALIDATION_ERROR con fieldErrors.sourceChannel", async (t) => {
  const baseUrl = await startTestApplication(t);
  const ticket = buildTicket({ sourceChannel: "whatsapp" });

  const response = await postTicket(baseUrl, ticket);
  const body = await response.json();

  assert.equal(response.status, 400);
  assert.equal(body.code, "VALIDATION_ERROR");
  assert.equal(body.fieldErrors.sourceChannel, "Canale di richiesta non valido.");
});
