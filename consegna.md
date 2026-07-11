# Consegna studenti - Lezione 14

## Obiettivo

Trasformare una assertion L13 in test eseguibile.

Durante l'esercizio devi anche capire:

```txt
rischio -> livello di test -> file -> comando
```

## Task

Scegli uno:

```txt
normale + email -> standard
```

oppure:

```txt
sourceChannel = whatsapp -> fieldErrors.sourceChannel
```

## Passi in aula

1. Scegli il comportamento.
2. Decidi il livello piu' piccolo utile:

   ```txt
   unit
   ```

   oppure:

   ```txt
   validation/API
   ```

3. Apri il file test indicato dal docente.
4. Chiedi una bozza all'AI usando il prompt sotto.
5. Inserisci o completa il test.
6. Esegui il comando:

   ```bash
   pnpm test:unit
   ```

   oppure:

   ```bash
   pnpm test:api
   ```

7. Leggi l'output.
8. Usa il prompt di review.
9. Correggi solo il minimo necessario.
10. Scrivi 4 righe:

   ```txt
   File:
   Comando:
   Output:
   Rischio protetto:
   ```

## Prompt 1 - scegliere livello e file

```txt
Devo testare questo comportamento:
[comportamento]

Repo disponibile:
- tests/unit
- tests/api
- server/ticket-rules.js
- server/validation.js

Dimmi:
- livello di test piu' piccolo utile;
- file in cui metterlo;
- comando da eseguire;
- perche' non serve un test browser.
```

## Prompt 2 - generare bozza

```txt
Scrivi un test node:test per questo comportamento:
[comportamento]

Vincoli:
- usa assert.equal;
- nome test leggibile;
- niente framework extra;
- niente snapshot;
- fixture minima;
- spiega quale rischio protegge.
```

## Prompt 3 - review

```txt
Rivedi questo test.
Cerca assertion troppo generiche, fixture inutili,
test fragile o scope extra.
Proponi solo correzioni minime.
```

## Cosa devi controllare tu

- Il file segue la convenzione della repo.
- Il test fallisce se si rompe proprio il comportamento scelto.
- Il comando gira davvero.
- L'output rosso o verde e' stato letto, non ignorato.
- AI non ha aggiunto framework, snapshot o browser test.

## Fuori scope

- Playwright.
- CI.
- Coverage.
- Installare Vitest, Jest, Cypress o altri tool.
- Refactor test utilities.
- `DUPLICATE_TICKET`.

## Pronto quando

Puoi mostrare:

```txt
test
comando
output
perche' il test fallirebbe se il comportamento si rompe
```
