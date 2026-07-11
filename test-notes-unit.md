# Test notes - L14

## Test scritto o completato

```txt
nome test: normale + email -> urgencyLabel === "standard"
file: tests/unit/ticket-rules.test.js (esercita la regola in server/ticket-rules.js)
livello: unit
```

## Comando eseguito

```bash
pnpm test:unit
```

## Output essenziale

```txt
✔ normale + email produce l'etichetta 'standard' (1.669593ms)
ℹ tests 1
ℹ suites 0
ℹ pass 1
ℹ fail 0
ℹ cancelled 0
ℹ skipped 0
ℹ todo 0
ℹ duration_ms 155.853807
```

## Rischio protetto

```txt
La regola priority=normale + sourceChannel=email -> urgencyLabel="standard"
viene modificata per errore (valore preso da un'altra combinazione
nella mappa urgencyLabels), o rotta invertendo l'ordine dei controlli interni
```

## Assertion centrale

```txt
assert.equal(urgencyLabel, "standard")
dato priority = "normale" e sourceChannel = "email"
```

## Perche' questo livello

```txt
computeUrgencyLabel è una funzione pura, quindi basta
chiamarla direttamente con input noti per verificare l'output
```

## Cosa ho corretto dopo review

```txt
Nessuna correzione necessaria: assertion già specifica (assert.equal sul
valore atteso "standard")
Verificato manualmente che il test fallisce rompendo il valore
in server/ticket-rules.js (email: "standard" -> "rotto"), poi ripristinato.
```
