'use strict';

const fs = require('node:fs');
const path = require('node:path');
const { renderQuoteApprovalPage } = require('../src/render');
const { sampleQuote } = require('../src/quote');

const dist = path.join(__dirname, '..', 'dist');
fs.mkdirSync(dist, { recursive: true });
fs.writeFileSync(path.join(dist, 'quote-approval.html'), renderQuoteApprovalPage(sampleQuote));
console.log('Built dist/quote-approval.html');
