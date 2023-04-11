/**
* Author : Fanelesibonge Mbuyazi
* Course : WSOA4175A : Interactive Media : Advanced
* Date: 09 April 2023 
* Description: Write a JavaScript program to find the area of a triangle where the lengths of the three of its sides are 5, 6, 7.
*/


// lengths of the three sides of the triangle
var side_1 = 5;
var side_2  = 6;
var side_3 = 7;


// calculating the semiperimeter variable
var semiperimeter = (side_1  + side_2  + side_3) / 2;

// calculating the area of the triangle
var area = Math.sqrt(semiperimeter * (semiperimeter - side_1 ) * (semiperimeter - side_2) * (semiperimeter - side_3));


// print the area on the console
console.log("The calculated area of the triangle is: " + area);
