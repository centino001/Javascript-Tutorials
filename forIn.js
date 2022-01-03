//this loop is used to iterate over the properties of an object

// const box={
//     solid:'pen',
//     gas:'insecticide'
// };//now using the for-in loop
// for(key in box)//this takes the key variable in the loop 
// //console.log(key);//this will display that key variable holding each property in the console
// //if you also want to display the values of those variables below is how to write the code

// console.log(key, box[key]);

// this can also be used to iterate over an array, though not the ideal way

const room = ['bed', 'chair', 'table', 'mat'];
for(let index in room)
console.log(index, room[index]);