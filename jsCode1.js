/*let name = "Ngnetchedjeu Mbende "
let lastName = "Steeve Marley"
let fullName = name + lastName
console.log(fullName)


let name = "Linda"
let greeting = "Hi there"

function logsOut() {
    hey = greeting + "," + name + "!"
    console.log(hey)
}
logsOut()

let num1 = 8
let num2 = 2
function add(){
    console.log(num1 + num2)
}
add()

function divide(){
    console.log(num1 / num2)
}
divide()
function substract(){
    console.log(num1 - num2)
}
substract()
function multiply(){
    console.log(num1 * num2)
}
multiply()
let age = 1003
if (age < 100) {
    console.log("not eligible")
} else if(age === 100){
    console.log("Here is your birthday card from the king")
} else {
    console.log("Not eligible, you have already gotten one")
}
console.log(3==="3")*/


let person = {
    nom : "Mbende",
    age : "22",
    pays : "Cameroon"
}

function chargerDonnees(){
   return person.nom + " a " +person.age+ " ans et vie au " + person.pays
}

console.log(chargerDonnees())