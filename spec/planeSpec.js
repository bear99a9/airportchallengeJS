'use strict';

describe('Plane', function () {
  let plane;
  let airport;
  beforeEach(function () {
    plane = new Plane;
    airport = jasmine.createSpyObj('airport', ['clearToland']);
  });

  it('can land at the airport', function () {
    plane.land(airport);
    expect(airport.clearToland).toHaveBeenCalledWith(plane);
  });
});
