

let name ="Ali"
var age=19;


console.log(`Name is : ${name} Age is : ${age}`);
if(age >18)
console.log("U Can Vote")

//for while do while for in for of
//"" '' ``
// for( let i =0; i<5;i++)
// console.log(i)
let list=[12,1,3,4,5];
console.log(list[0])

// for( item of list)
// console.log(item)
list.forEach(function(value){
console.log(value)
})

// for(index in list){
//     console.log(list[index])
// }

//function
const MYNUMBER=10;
let display =function (){
    document.write("hello")
}

display();
 function sum(a, b){
     return a+b;
 }
 console.log("sum is :"+sum(12,2))