'use strict'

describe('Thermostat', function(){
  var thermostat;

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it('has a default temperature of 20', function(){
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it ('increases temperature with up()', function(){
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(21);
    thermostat.up();
    thermostat.up();
    expect(thermostat.getCurrentTemperature()).toEqual(23);
  });

  it ('decreases temperature with down()', function(){
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(19);
    thermostat.down();
    thermostat.down();
    expect(thermostat.getCurrentTemperature()).toEqual(17);
  });

  it('has a minimum temp of 10 degrees', function(){
    for (var i = 1; i < 12; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });

  it('expect power saving mode to be on by default', function() {
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('can switch power saving mode off', function() {
    thermostat.togglePSM();
    expect(thermostat.powerSavingMode).toBe(false);
  });

  it('can switch power saving mode back on', function() {
    thermostat.togglePSM();
    expect(thermostat.powerSavingMode).toBe(false);
    thermostat.togglePSM();
    expect(thermostat.powerSavingMode).toBe(true);
  });

  it('can reset temperature to a default temp (20 degrees)', function() {
    for (var i = 1; i < 6; i++) {
      thermostat.up();
    }
    thermostat.reset();
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  describe('when power saving mode is on', function(){
    it('has a maximum temperature of 25 degrees', function(){
      for (var i = 1; i < 7; i++) {
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(25);
    });
  });

  describe('When power saving mode is off', function(){
    it('has a maximum temperature of 32 degrees', function(){
      for (var i = 1; i < 14; i++) {
        thermostat.togglePSM();
        thermostat.up();
      }
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('Energy usage levels', function(){
    it('is at low energy usage if temperature is <18 degrees', function(){
      for (var i = 1; i < 4; i++) {
        thermostat.down();
      }
      expect(thermostat.energyUsage()).toEqual('low-usage');
    });

    it('is at medium energy usage if temperature is <25 degrees', function(){
      for (var i = 1; i < 5; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('medium-usage');
    });

    it('is at high energy usage if temperature is >=25 degrees', function(){
      for (var i = 1; i < 6; i++) {
        thermostat.up();
      }
      expect(thermostat.energyUsage()).toEqual('high-usage');
    });
  });

});
