//function scope 
let subject = 'create video'

function createThink(subject){
    subject = 'study'
    return subject
}


console.log(createThink(subject))
console.log(subject)
/* About Scope, The 1st console.log will return "study" because it's  calledd in the function and the 2nd console.log will return what was defined before "Create video" 
*/
// function Hoisting

//Hoisting is when we call a function before to create them. In JavaScript before of execute a program the computer saves the instructions that wil be execute
sayName()

function sayName(){
    console.log('Rafa')
}

//callback function

function sayMyName(name){
    console.log('Before execute a function callback')
    name()
    console.log('After execute a function callback')
}
sayMyName(
    () =>{
        console.log('Estou em uma callback')
    }
)
/*
Function() constructor
* Expression new 
* create a new object

*/
function Person(name) {
this.name = name
this.walk = function(){
    return this.name + " Está andando"
}
}
const mayk = new Person('Mayk')
const joao = new Person('Joao')
console.log(joao.walk())
console.log(mayk.walk())