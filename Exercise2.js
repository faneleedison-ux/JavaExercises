/**
* Author : Fanelesibonge Mbuyazi
* Course : WSOA4175A : Interactive Media : Advanced
* Date: 09 April 2023 
* Description: Write a JavaScript program to determine whether a given year is a leap year. The prgram returns true or false, 
true for a leap year and false if not a leap year.

*/


// To test the program write  console.log(boolLeapYear(INSERT YEAR YOU WANT TO TEST));

function boolLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true;
        } else {
          return false;
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }





  