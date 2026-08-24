# quote-service

Renders the client-facing **Quote approval page** shown to Jobber clients in **Client Hub** (web and mobile). When a service pro sends a quote, the client opens this page to review the line items and tap **Approve Quote**.

## Structure
- `src/quote.js` — quote math (line totals, subtotal, tax, total) and sample data
- `src/styles.js` — styles for the approval card
- `src/render.js` — renders the approval page HTML
- `scripts/build.js` — builds `dist/quote-approval.html`
- `test/` — unit tests (run with `node --test`)

## Develop

```bash
node --test      # run the test suite
npm run build    # render dist/quote-approval.html
```

## CI/CD
- **CI** (`.github/workflows/ci.yml`) runs the test suite on every pull request.
- **Deploy** (`.github/workflows/deploy.yml`) builds and deploys **staging → production** on merge to `main`.

## Notes
The approval card is intended to be fully responsive down to 320px-wide mobile viewports.
