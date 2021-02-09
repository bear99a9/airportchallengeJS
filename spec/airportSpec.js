'use strict';

describe('Airport', function () {
  let airport;
  let plane;
  beforeEach(function () {
    plane = jasmine.createSpyObj('plane', ['land', 'takeoff']);
    airport = new Airport();
  });

  it('has no planes by on initialize', function () {
    expect(airport.planes()).toEqual([]);
  });

  it('can allow planes to land', function () {
    airport.clearForLanding(plane);
    expect(airport.planes()).toContain(plane);
  });

  it('can allow planes to takeoff', function () {
    airport.clearForLanding(plane);
    airport.clearForTakeOff(plane);
    expect(airport.planes()).toEqual([]);
  });

});
