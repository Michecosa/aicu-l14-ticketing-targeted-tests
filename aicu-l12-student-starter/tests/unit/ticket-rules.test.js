import { test } from "node:test";
import assert from "node:assert/strict";

import { computeUrgencyLabel } from "../../server/ticket-rules.js";

test("normale + email produce l'etichetta 'standard'", () => {
  const urgencyLabel = computeUrgencyLabel("normale", "email");

  assert.equal(urgencyLabel, "standard");
});
