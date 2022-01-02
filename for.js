//this is a code for writing for loop


// for (let i=0; i<5; i++){
//     console.log(i);
// }

//=================================================================
//=================================================================


//let's say we want to display just the odd or even numbers from 1 to 5

// for (let i=1; i<=5; i++){
//     if(i%2 !==0) console.log(i); //this statement means if the modulus or remainer of i is not equal to 0 (odd numbers)display those numbers
// }

//similarly, to show only even numbers the below will be written

// for (let i=1; i<=5; i++){
//     if(i%2 ==0) console.log(i); //this statement means if the modulus or remainer of i is equal to 0 (even numbers)display those numbers
// }


//==========================================================
//now the above lines of code, is displaying the numbers in ascending order, what if we want it to be in descending order?

for (let i=5; i>=1; i--){
     console.log(i); // note the changes here, instead of incrementing we're decrementing and value of i has been changed
}