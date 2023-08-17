//testando conhecimentos
//1. Declare uma variável
let weight;
//2. Que tipo de dado é a variável acima?
console.log(typeof weight)
/*3. Declare uma variável e atribua valores para cada um dos dados:
    * name: String 
    * age: Number (integer)
    * stars: Number(float)
    * isSubscribed: Boolean
*/
/*let name = Rafael
let age = 22
let stars = 4.8
let isSubscribed = true*/
/*4. A variável student abaixo é de que tipo?
 4.1 atribua a ela as mesmas propriedades e valore do exercicio 3.
 4.2 Mostre no console a seguinte mensagem:
 <name> de idade <age> pesa <weight> kg.
    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto
 */
//console.log(typeof student)
let student = {
    name:'Rafael',
    age: 22,
    weight:55.6,
    stars: 4.8,
    isSubscribed: true
}
//console.log("Seu nome é "+ student.name+" de idade "+ student.age+" e Peso "+student.weight+" Kg")

//5. Declare uma variável do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente o array vazio
let students = [
    student
]
const john = {
    name: "John",
    age: 23,
    weight: 80.0,
    isSubscribed: false
}
students[1] = john;
console.log(students)