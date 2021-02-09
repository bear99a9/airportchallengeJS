'use strict';

describe('Airport', function () {
  let airport;
  let plane;
  beforeEach(function () {
    plane = jasmine.createSpyObj('plane', ['land']);
    airport = new Airport();
  });

  it('has no planes by on initialize', function () {
    expect(airport.planes()).toEqual([]);
  });

  it('can allow planes to land', function () {
    airport.clearToLand(plane);
    expect(airport.planes()).toContain(plane);
  });
});
