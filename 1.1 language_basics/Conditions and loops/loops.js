//for
for(let a = 0;a < 5;a++){
    console.log(a);    
}

//while
let b = 0
while(b < 5){
    console.log(b);
    b++;
}

//do...while
let c = 0;
do{
    console.log(c);
    c++;
} while(c < 5);

//for..of example
const numbers = [1,2,3,4,5,6,7]
for(let num of numbers){
    console.log(num)
}

//for..in example
person={name: "ABC",age: 27}
for(let key in person){
    console.log(key," ",person[key])
}

//break for exit the loop and continue for continue with next
for(let i = 0;i < 5;i++){
    if(i === 3){
        break; //exits the loop when i is 3
    }
    console.log(i);
}

for(let i=0;i<5;i++){
    if(i===3){
        continue; //skips the iteration when i is 3
    }
    console.log(i)
}

//nested for loops
for(let row of matrix){
    for(let value of row){
        console.log(value)
    }
}

//infinte loop
while(true){
    //will run until is broken
    break; //prevent infinte loop
}