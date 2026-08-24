'use strict';
const test = require('node:test');
const assert = require('node:assert');
const { css } = require('../src/styles');

test('approve action does not float over the summary', () => {
  const actions = css.match(/\.quote-actions\s*\{[^}]*\}/)[0];
  assert.doesNotMatch(actions, /position:\s*absolute/,
    'Approve button must stack in normal flow so it cannot overlap the Total');
  assert.match(actions, /margin-top/,
    'Approve button should have top spacing below the summary');
});
