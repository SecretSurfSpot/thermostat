'use strict'

function Thermostat() {
  this.DEFAULT_TEMPERATURE = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.LOW_ENERGY_USAGE_LIMIT = 17;
  this.MEDIUM_ENERGY_USAGE_LIMIT = 24;
  this.MAX_TEMP_PSM_ON = 25; // PSM = Power Saving mode
  this.MAX_TEMP_PSM_OFF = 32;
  this.temperature = this.DEFAULT_TEMPERATURE;
  this.powerSavingMode = true;
}

Thermostat.prototype.getCurrentTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.up = function() {
  if (!this.isMaximumTemperature()){
    return this.temperature++;
  }
};

Thermostat.prototype.down = function() {
  if(!this.isMinimumTemperature()){ //using 'is' denotes function returns a boolean
    return this.temperature--;
  }
};

Thermostat.prototype.isMinimumTemperature = function() { //using 'is' denotes function returns a boolean
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.powerSavingMode === true) {
    return this.temperature === this.MAX_TEMP_PSM_ON;
  } else {
    return this.temperature === this.MAX_TEMP_PSM_OFF;
  }
};

Thermostat.prototype.togglePSM = function() {
  this.powerSavingMode = !this.powerSavingMode
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMPERATURE;
};

Thermostat.prototype.energyUsage = function() {
  if (this.temperature <= this.LOW_ENERGY_USAGE_LIMIT) {
    return 'low-usage';
  } else if (this.temperature <= this.MEDIUM_ENERGY_USAGE_LIMIT) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
};
