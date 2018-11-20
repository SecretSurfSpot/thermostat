# Thermostat

Thermostat, created with JavaScript and Jasmine (testing framework), using BDD, TDD and OOP principles.

## Requirements

- Thermostat starts at 20 degrees
- You can increase the temperature with an up function
- You can decrease the temperature with a down function
- The minimum temperature is 10 degrees
- If power saving mode is on, the maximum temperature is 25 degrees
- If power saving mode is off, the maximum temperature is 32 degrees
- Power saving mode is on by default
- You can reset the temperature to 20 with a reset function
- You can ask about the thermostat's current energy usage: < 18 is low-usage, < 25 is medium-usage, anything else is high-usage.
- Low-usage will be indicated with green, medium-usage indicated with black, high-usage indicated with red.

## The Application (thermostat)

The project can be found here:
https://github.com/SecretSurfSpot/thermostat

### Installation
- Clone the repo to your local machine:
git clone https://github.com/SecretSurfSpot/thermostat.git

### Testing
To test the application:
- Navigate to the project root (thermostat)
- In the project root execute `open -a "Google Chrome" SpecRunner.html`
![SpecRunner Screenshot](https://github.com/SecretSurfSpot/thermostat/blob/master/images/SpecRunnerScreenshot.png)


### User Interaction
To interact with the app (see screenshot of the thermostat interface below):
- Use the plus (+) and minus (-) buttons to increase/decrease the temperature.
- Use the Reset button to reset the temperature to 20 degrees.
- Use the PSM button to invoke Power Saving Mode: PSM limits the temperature achievable to 25 degrees, or if the temperature is already above 25 degrees, it will reduce it to 25 degrees and restrict any further increase. PSM can be toggled on or off.

![Thermostat interface](https://github.com/SecretSurfSpot/thermostat/blob/master/images/thermostat%20interface.png)
