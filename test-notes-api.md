# Test notes - L14

## Test scritto o completato

```txt
nome test: sourceChannel = whatsapp -> fieldErrors.sourceChannel
file: tests/api/ticket-validation.test.js (esercita POST /api/tickets in server/app.js + server/validation.js)
livello: validation/API
```

## Comando da eseguire

```bash
pnpm test:api
```

## Output essenziale

```txt
✔ sourceChannel 'whatsapp' produce 400 VALIDATION_ERROR con fieldErrors.sourceChannel (48.660384ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 175.30613
```

## Rischio protetto

```txt
Un ticket con sourceChannel="whatsapp" (canale non supportato dal server)
viene accettato invece di essere rifiutato, oppure la validazione smette di
restituire lo status 400 con code="VALIDATION_ERROR" e fieldErrors.sourceChannel
```

## Assertion centrale

```txt
assert.equal(response.status, 400)
assert.equal(body.code, "VALIDATION_ERROR")
assert.equal(body.fieldErrors.sourceChannel, "Canale di richiesta non valido.")
dato sourceChannel = "whatsapp" (resto del ticket valido)
```

## Perche' questo livello

```txt
La regola di validazione è legata al giro HTTP: normalizzazione dell'input,
status code e forma dell'errore sono decisi in server/app.js, non solo dalla
funzione pura in validation.js. Serve quindi un test a livello API, ma non
serve un test browser.
```

## Cosa ho corretto dopo review

```txt
Nessuna correzione necessaria
```