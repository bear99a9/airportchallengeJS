'use strict';

describe('Plane', function () {
  let plane;
  beforeEach(function () {
    plane = new Plane;
  });

  it('can land at the airport', function () {
    expect(plane.land).not.toBeUndefined();
  });
});
