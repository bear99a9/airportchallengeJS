'use strict';
class Airport {
  constructor() {
    this._hanger = [];
  }

  planes() {
    return this._hanger;
  }

  clearToLand(plane) {
    this._hanger.push(plane);
  }
}
