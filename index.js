let name='Bob';
console.log(name);


let a=5;
let b=undefined;
let c=true;
let d=null;
console.log(a,b, c, d);

//object
let person={
name:'MIKe',
age: 24
};
//dot notation
person.name='John';
console.log(person.name);

//bracket notation
person['age']=25;
console.log(person.age);

//arrays
let selectedColors=['red','blue','black'];
selectedColors[3]='pink';
console.log(selectedColors);
console.log(selectedColors[1]);
console.log(selectedColors[3]);

//functions // performing a task
function greet(name){
    console.log('Hi,'+name);
}

greet('Mike');
greet('Bil');

// calculating a value
function cube(num){
    return num*num*num;
}
let val=cube(5);    
console.log(val);