# Test notes - L14

## Test scritto o completato

```txt
nome test: alta + telefono -> urgencyLabel === "intervento rapido"
file: tests/unit/ticket-rules.test.js (esercita la regola in server/ticket-rules.js)
livello: unit
```

## Comando eseguito

```bash
pnpm test:unit
```

## Output essenziale

```txt
[ciao ricc tutto bene?]
```

## Rischio protetto

```txt
La regola priority=alta + sourceChannel=telefono -> urgencyLabel="intervento rapido"
viene modificata per errore (refactor, valore preso da un'altra combinazione),
duplicata nel client in modo divergente dal server, o rotta invertendo l'ordine
dei controlli interni (es. valutare prima sourceChannel invece di priority).
In tutti i casi un ticket urgente via telefono smetterebbe di essere segnalato
come "intervento rapido"
```

## Assertion centrale

```txt
assert.equal(urgencyLabel, "intervento rapido")
dato priority = "alta" e sourceChannel = "telefono"
```

## Perche' questo livello

```txt
Perché ci piace
```

## Cosa ho corretto dopo review

```txt
[No spoiler]
```
