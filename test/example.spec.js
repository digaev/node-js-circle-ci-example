const { assert } = require("chai");

const { circleCI } = require("../src");

describe('circleCI', () => {
  it('returns the name', () => {
    assert.equal(circleCI(), 'CircleCI');
  });
});
