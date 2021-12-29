//Hello, this file shows how to get around with Arithmetic operators
//these operators are; '+' '-' '*' '/' '%' '**' '++' '--'
//(addition, subtraction, multiplication, division and modulus division respectively)



//please read the comments carefully as it will guide you through this tutorial


let x=16;//let is used to declare varaibles in javascript
let y=3;

//you could also declare the 2 variables using a single let keyword:::::
//let x=4, y=15; :::::uncomment this line and test the code to be sure it's the same as the former

console.log(x/y);
console.log(x-y);
console.log(x%y);
console.log(x*y);
console.log(x+y);
console.log(x**y);//this here takes the value of x and exponents the value of y concatenating it to x: something like(x^y)


console.log(++x);// this increments the value of x before displaying it on the console


//for lines 19 and 20:::to see results, comment all the console.log codes and run lines 19 and 20{
console.log(x++);
console.log(x);
//the above 2 lines will display value of x first for the first console.log before incrementing the value of x
//the second line (20) will display the incremented value of x from line (19)}



console.log(--x);//same as line 17

//below lines uses the same algorithm as lines 19 and 20
console.log(x--);
console.log(x);