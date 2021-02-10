'use strict';

describe('Plane', function () {
  let plane;
  let airport;
  beforeEach(function () {
    plane = new Plane;
    airport = jasmine.createSpyObj('airport', ['clearForLanding', 'clearForTakeOff']);
  });

  it('can land at an airport', function () {
    plane.land(airport);
    expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
  });

  it('can takeoff from an airport', function () {
    plane.land(airport);
    console.log(airport);
    plane.takeoff();
    console.log(airport);
    console.log('Hi');
    expect(airport.clearForTakeOff).toHaveBeenCalled();
  });
});
