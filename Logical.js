//in this tutorial, we'd be using these operators to make decisions based on multiple conditions
//so we are going straight to real world operation with these operators
//a real world scenario is your typical login process on any platform that needs your username and password to be true
//with what they have in the database. In any case, one is false, you won;t get access to your account. Let's dig in, shall we?

//the below lines of code is for logical AND &&
// let password = true;
// let username = true;
// // in any case any of the above is false, you can't have access to your account

// let login = password && username;

// console.log(login);

//inter change the value of password and username to test again




//=======================================================================
//=======================================================================
//=======================================================================


//the below lines of code is for the logical OR ||
//real world scenario for the below is getting a new work and the requirements needs either a SSCE, BSc(equivalent)
// or both. one must be true ele false

// let SSCE = true;
// let BSc = false;
// // in any case any of the above is false, you can't have access to your account

// let Hire = SSCE || BSc;

// console.log(Hire);



//=======================================================================
//=======================================================================
//=======================================================================



//the other logical operator is the NOT !
//let's still use thework hire code..NOT converts anything you give it to the opposite, so if it's true, it'll 
//display false and vice versa..shal we?

let SSCE = false;
let BSc = false;
// in any case all of the above is false, you won't be hired

let Hire = SSCE || BSc;

console.log(Hire);// outputs false
let rejectOffer =!Hire; //inverting this will output true
console.log(rejectOffer);// this outputs true because it tells the company that the offer should be rejected




//