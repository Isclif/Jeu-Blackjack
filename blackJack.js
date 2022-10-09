/*let player = {
    Nom : "Isclif",
    ships : 2000
}*/

let Nom = "Isclif"
let ships = 2000
let Carte1 = 0
let Carte2 = 0
let cartes = []
let sum = 0
let  Gagne = false
let enVie = true
let message = ""
let message1 = document.getElementById("message1")
let somme = document.getElementById("somme")
let carte = document.getElementById("carte")
let argent = document.getElementById("argent")

/*argent.textContent = player.Nom + " : " + player.ships + "F"*/

argent.textContent =" Isclif: " + ships + "F"

function getRandomCard(){
    let randomNumber = Math.floor(Math.random() * 13) + 1

    if(randomNumber > 10){
        return 10
    } else if (randomNumber === 1){
        return 11
    } else {
        return randomNumber
    }

}

function Commencer() {

    ships = "1500 F"

     Carte1 = getRandomCard()
     Carte2 = getRandomCard()
     cartes = [Carte1, Carte2]
     sum = Carte1 + Carte2
    RenderGame()
  
    argent.innerHTML =`Isclif: <font color="red">${ships}</font> `

    if ( Gagne === true ) {
        ships = "3000 F"
        argent.innerHTML =`Isclif: <font color="yellow">${ships}</font> `
    }
}

function RenderGame() {
    carte.textContent = "Cartes: "

    for(let i=0; i < cartes.length; i++){
        carte.textContent += cartes[i] + " "
    }

    somme.textContent = "Somme: " +sum 
    if (sum < 21) {
        message1.textContent = "Voulez vous ajouter une nouvelle carte ?"
    } else if(sum === 21){
        message1.innerHTML = `<font color="yellow">Bravo! Vous avez eu le BLACKJACK </font> `
        Gagne = true
    } else {
        message1.innerHTML = `<font color="red"> Vous avez PERDU ! Rafraichissez la page et relancez le jeu, Bonne chance.</font> `
        enVie = false
    }
}

function NewCarte() {

    if ( enVie === true && Gagne === false ) {
    let carte3 = getRandomCard()
    sum += carte3
    cartes.push(carte3)
    RenderGame() 
    }

    if ( enVie === false ) {
        ships = "1500 F"
        argent.innerHTML =`Isclif: <font color="Red">${ships}</font> `
    }

    
    if ( Gagne === true ) {
        ships = "3000 F"
        argent.innerHTML =`Isclif: <font color="yellow">${ships}</font> `
    }
    
}

