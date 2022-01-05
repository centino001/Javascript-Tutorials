const circle = {
    radius:1,
    location: {
        x:2,
        y:1
    },
    draw: function (){
        console.log('draw');
    }


};

circle.draw();
// if a function is part of an object, it's called a method. thus the function 'draw' is a method of the object 'circle'
