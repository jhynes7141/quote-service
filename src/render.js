'use strict';

const { summarize, formatMoney, lineTotal } = require('./quote');
const { css } = require('./styles');

function renderQuoteApprovalPage(quote) {
  const { subtotal, tax, total } = summarize(quote);
  const rows = quote.items
    .map(
      (item) =>
        `<div class="line"><span>${item.name}</span><span>${formatMoney(lineTotal(item))}</span></div>`
    )
    .join('\n      ');

  return `<!doctype html>
<html>
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <style>${css}</style>
</head>
<body>
  <div class="quote-card">
    <h2>Quote ${quote.id}</h2>
    <p>${quote.client}</p>
    <div class="lines">
      ${rows}
    </div>
    <div class="quote-summary">
      <div class="line"><span>Subtotal</span><span>${formatMoney(subtotal)}</span></div>
      <div class="line"><span>Tax</span><span>${formatMoney(tax)}</span></div>
      <div class="line quote-total"><span>Total</span><span>${formatMoney(total)}</span></div>
    </div>
    <div class="quote-actions">
      <button class="approve-btn">Approve Quote</button>
    </div>
  </div>
</body>
</html>`;
}

module.exports = { renderQuoteApprovalPage };
