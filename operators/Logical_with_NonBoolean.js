// we goona be talking bout Truthy and Falsy
//in javascript, logical operators can be used with non bolean values
// this means that if the JS engine compares 2 values according to the logical operator used, it's going to display whether 
// the result is truthy or falsy. let dig in

//type the following codes in your browser console using (ctrl+shift+I for chrome)

// console.log(false || true);
// console.log(false || 1);
// console.log(false || 'centino');
// the above will display everything except false cos they're all truthy value
// the following are falsy related values;
//Falsy (false)
//Null
//NaN
//undefined
// ''(empty string)
// 0
//false

//except what you're logging carries the above then it's not truthy


// =================================================================================
//real life scenario of the above.....let's say you are asked to input your eye colour... subsequently, if you however skip
// the picking of the colour the default colour of black sets in 

let eyeColor = "brown";
let defaultEyeColor ="black";
let currentColor = eyeColor || defaultEyeColor;//this picks the eye color if available and picks the default if eye color isn't available

console.log(currentColor);