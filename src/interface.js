var thermostat = new Thermostat;

$(document).ready(function() {

  $("#plus").click(function(event) {
    thermostat.up();
    $("#energyUsage").html(thermostat.energyUsage());
    $("#temp_num").html(thermostat.temperature);
  });

  $("#minus").click(function(event) {
    thermostat.down();
    $("#energyUsage").html(thermostat.energyUsage());
    $("#temp_num").html(thermostat.temperature);
  });

  $("#reset").click(function(event) {
    thermostat.reset();
    $("#energyUsage").html(thermostat.energyUsage());
    $("#temp_num").html(thermostat.temperature);
  });

  $("#powerSave").click(function(event) {
    thermostat.togglePSM();
    $("#powerSaveDisplay").toggle("fast", function() {
      $("#powerSaveDisplay").css("color", "lime")
    });

  });

  $("#energyUsage").html(thermostat.energyUsage());



});
