'use strict';

describe('Airport', function () {
  let airport;
  let plane;
  beforeEach(function () {
    plane = new Plane();
    airport = new Airport();
  });

  it('has no planes by on initialize', function () {
    expect(airport.planes()).toEqual([]);
  });
});
