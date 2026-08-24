'use strict';

const css = `
.client-hub { font-family: sans-serif; padding: 24px; }
.quote-card { border: 1px solid #e0e0e0; border-radius: 8px; padding: 24px; }
.quote-line-items { margin-bottom: 16px; }
.quote-summary { border-top: 1px solid #e0e0e0; padding-top: 12px; }
.quote-actions { margin-top: 16px; }
.approve-button {
  background: #1f8a4c;
  color: #ffffff;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-weight: bold;
}

@media (max-width: 480px) {
  .client-hub { padding: 16px; }
}
`;

module.exports = { css };
