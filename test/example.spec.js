const { assert } = require("chai");

const example = require('../src');

describe('example', () => {
  it('returns description', () => {
    assert.equal(example(), 'Node.js Travis-CI example');
  });
});
