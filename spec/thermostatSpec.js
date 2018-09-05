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

});
