'use strict';

/**
 * Styles for the client-facing quote approval card (Client Hub).
 *
 * The Approve button lives in `.quote-actions`, which is absolutely positioned
 * so it "floats" in the bottom-right of the card. This renders fine on wide
 * desktop viewports, but on narrow mobile screens there is no space reserved
 * for it, so it can overlap the Total line.
 */
const css = `
.quote-card {
  max-width: 480px;
  margin: 0 auto;
  font-family: -apple-system, 'Segoe UI', Roboto, sans-serif;
  color: #12203a;
  border: 1px solid #e3e6e8;
  border-radius: 12px;
  padding: 20px;
  position: relative;
}
.line {
  display: flex;
  justify-content: space-between;
  padding: 6px 0;
}
.quote-summary {
  border-top: 1px solid #eef0f1;
  margin-top: 12px;
  padding-top: 12px;
}
.quote-total {
  font-size: 20px;
  font-weight: 700;
}
.quote-actions {
  position: absolute;   /* floats over the card instead of stacking below the summary */
  right: 20px;
  bottom: 10px;
  width: 55%;
}
.approve-btn {
  display: block;
  width: 100%;
  padding: 14px 16px;
  background: #1a8a4c;
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
}
@media (max-width: 480px) {
  /* No bottom space reserved for the floating button on phones. */
  .quote-summary { padding-bottom: 0; }
}
`;

module.exports = { css };
