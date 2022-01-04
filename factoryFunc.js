//this does away with the too copious lines of codes we have to copy and paste if we're dealing with multiple identical objects
//similar to the 'object.js' file we gonna shorten everything so our code will be clean
// in factory functions, we call a function then return a new object
//this type of function uses the camel notation naming case "createCircle"

// function createCircle(radius) {
//     return{
//     radius,
//         draw(){
//         console.log(draw);
//         }
//     };
// }

// const circle1=createCircle(1);
// console.log(circle1);





function createRectangle(length, breadth){
    return{
        length,
        breadth,
        draw(){
            console.log('draw');
        }
    };
}

const rectangle1=createRectangle(23,45);
console.log(rectangle1);

const rectangle2=createRectangle(12,60);
console.log(rectangle2);













// function createBox(radius){
//     return{
//         radius,
//         draw(){
//             console.log(draw);
//         }
//     };
// }

// const box1=createBox(3);
// console.log(box1);