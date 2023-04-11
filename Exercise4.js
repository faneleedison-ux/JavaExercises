/**
* Author : Fanelesibonge Mbuyazi
* Course : WSOA4175A : Interactive Media : Advanced
* Date: 09 April 2023 
* Description: Write a JavaScript program to convert temperatures to and from Celsius and Fahrenheit.

Fahrenheit to Celsius : (°F − 32) ÷ 1.8 = °C
+Celsius to Fahrenheit : (°C × 1.8) + 32 = °F

*/


// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) / 1.8;
  }
  
  // Function to convert Celsius to Fahrenheit
  function celsiusToFahrenheit(celsius) {
    return (celsius * 1.8) + 32;
  }
  
  // Examples of using the functions
  console.log(fahrenheitToCelsius(68)); 
  console.log(celsiusToFahrenheit(20)); 
  