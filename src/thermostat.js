'use strict'

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  return this.temperature += 1;
};

Thermostat.prototype.down = function() {
  if(this.isMinimumTemperature()){ //using 'is' denotes function returns a boolean
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function() { //using 'is' denotes function returns a boolean
  this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.powerSavingMode === true;
}
