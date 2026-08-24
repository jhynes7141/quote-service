'use strict';

/**
 * Quote math for the Client Hub approval page.
 * quantity may be blank/null while a pro is still drafting; treat it as 0.
 */
function lineTotal(item) {
  return (Number(item.quantity) || 0) * item.unitPrice;
}

function summarize(quote) {
  const subtotal = quote.items.reduce((sum, item) => sum + lineTotal(item), 0);
  const tax = subtotal * quote.taxRate;
  const total = subtotal + tax;
  return { subtotal, tax, total };
}

function formatMoney(amount) {
  return '$' + amount.toFixed(2);
}

const sampleQuote = {
  id: 'Q-1043',
  client: 'Maplewood Lawn Care',
  taxRate: 0.12,
  items: [
    { name: 'Weekly mowing', quantity: 3, unitPrice: 45 },
    { name: 'Spring cleanup', quantity: 1, unitPrice: 220 },
    { name: 'Fertilizer treatment', quantity: 2, unitPrice: 60 },
  ],
};

module.exports = { lineTotal, summarize, formatMoney, sampleQuote };
