'use strict';

class Plane {
  constructor() {
    this._location;
  }

  land(airport) {
    airport.clearForLanding(this);
  };

  takeoff() {
    this._location.clearForTakeOff();
  }
}
