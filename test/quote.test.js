'use strict';

const test = require('node:test');
const assert = require('node:assert');
const { summarize, formatMoney, sampleQuote } = require('../src/quote');
const { renderQuoteApprovalPage } = require('../src/render');

test('summarize computes subtotal, tax, and total', () => {
  const { subtotal, tax, total } = summarize(sampleQuote);
  assert.strictEqual(subtotal, 475);
  assert.strictEqual(Number(tax.toFixed(2)), 57);
  assert.strictEqual(Number(total.toFixed(2)), 532);
});

test('formatMoney renders two decimals with a dollar sign', () => {
  assert.strictEqual(formatMoney(532), '$532.00');
});

test('approval page renders the total and an Approve button', () => {
  const html = renderQuoteApprovalPage(sampleQuote);
  assert.match(html, /Total/);
  assert.match(html, /\$532\.00/);
  assert.match(html, /Approve Quote/);
});
