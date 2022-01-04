//this type of function creates a new empty object and uses the "this" keyword to point to the newly created object
//it uses pascal naming notation "CircleFunction"




function Circle(radius){
    this.radius=radius;
    this.draw = function(){
        console.log('draw');
    }
}

const circle= new Circle(2);
console.log(circle);