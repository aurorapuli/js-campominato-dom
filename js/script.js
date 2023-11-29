// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.


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


 
