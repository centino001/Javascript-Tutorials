

//the below lines of codes is a conditional statement for telling the time using if else statement

let hour = 18;

if(hour ===12 && hour <= 16)
    console.log('Good Afternoon')
else if (hour >16 && hour <=21)
    console.log('Good Evening')
else if (hour >21 && hour ==23)
    console.log('Goodnight');
else if (hour >=0 && hour <= 11)
    console.log('Good Morning');
else 
    console.log('Out Of Bounds');