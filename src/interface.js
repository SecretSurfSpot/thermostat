$(document).ready(function() {
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=a3d9eb01d4de82b9b8d0849ef604dbed&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp);
  })

  var thermostat = new Thermostat;

  energyAndTemperature = function(){
    $("#energyUsage").html(thermostat.energyUsage()); // update view
    $("#temp_num").html(thermostat.temperature); //update view
  }

  $("#plus").click(function(event) { // event listener
    thermostat.up(); // update mdoel
    energyAndTemperature(); //update view
  })

  $("#minus").click(function(event) {
    thermostat.down();
    energyAndTemperature();
  })

  $("#reset").click(function(event) {
    thermostat.reset();
    energyAndTemperature();
  })

  $("#powerSave").click(function(event) {
    thermostat.togglePSM();
    if (thermostat.powerSavingMode === false) {
      $("#powerSaveDisplay").css("color", "grey")
    } else if (thermostat.powerSavingMode === true) {
      energyAndTemperature();
      $("#powerSaveDisplay").css("color", "lightgreen")
    }
  })

  $("#energyUsage").html(thermostat.energyUsage());

})
