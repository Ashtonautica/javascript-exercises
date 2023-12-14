const roundTo1DP = function(input) {
  return Math.round(input * 10) / 10;
}

const convertToCelsius = function(tempF) {
  return roundTo1DP((tempF - 32) / 1.8);
};

const convertToFahrenheit = function(tempC) {
  return roundTo1DP((tempC * 1.8) + 32);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
