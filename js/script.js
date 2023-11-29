// Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: nella stessa cella può essere posizionata al massimo una bomba, perciò nell’array delle bombe non potranno esserci due numeri uguali.
// In seguito l’utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina.
// Altrimenti la cella cliccata si colora di azzurro e l’utente può continuare a cliccare sulle altre celle.
// La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
// Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.




// Mi ricavo l'elemento della griglia

const row = document.querySelector('.row');

// mi ricavo l'elemento del bottone

const playButton = document.getElementById('button');

// creo una funzione che mi crei un elemento generale

function createElement (tagElement, classList){

    let newElement = document.createElement (tagElement);

    newElement.classList.add(classList);

    return newElement;

}


// creo l'arrey dove andrò a mettere le 16 "bombe"

let bombe = arreyBombe(1, 100, 16);

console.log(arreyBombe(1, 100, 16));

// quando clicco play succederanno le seguenti cose

     playButton.addEventListener('click',

      function(){

        row.innerHTML = "";


        for (let i = 1; i <= 100; i++){

        // creo il mio elemento

          let col = createElement ('div', 'col');

           
        //   appendo al mio elemento le i
          col.append(i);

          console.log(col);
          

        //   stabilisco che al click di ogni cella il colore cambierà

          col.addEventListener ('click',
            function(){

                col.classList.add('lightblue');

                console.log(i);

            });

        // appendo le col alla row
           row.append (col);

        }
       
});


 
// creiamo il nostro arrey di bombe

function arreyBombe(minNum, maxNum, lengthNum){

// array da popolare
  const arrayToGen = [];

  // ciclo while

  while(arrayToGen.length < lengthNum){

    let newNumber = numRandom(minNum, maxNum);

    if(!arrayToGen.includes(newNumber)){

      arrayToGen.push(newNumber);

    }
  }

   return arrayToGen;

}


// funzione numero random

function numRandom (min, max){

   return Math.floor(Math.random() * (max - min + 1) + min);
}