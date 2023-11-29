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

  let select = document.querySelector('.select');

  select.addEventListener('change',
    function(e){
      if(e.target.value == "easy"){
            
          // quando clicco play succederanno le seguenti cose
        
        playButton.addEventListener('click',
        
        function(){

          row.innerHTML = "";

          numberGrid(49, 'easy');
        
          
        });
        
      } else if(e.target.value == "medium"){
            
          // quando clicco play succederanno le seguenti cose
        
          playButton.addEventListener('click',
        
          function(){

            row.innerHTML = "";

            numberGrid(81, 'medium');
          });

      } else{
        playButton.addEventListener('click',

        function(){

          row.innerHTML = "";

          numberGrid(100, 'hard')  
        });
        
      }
    });



function numberGrid (number, addClass){
  // creo l'arrey dove andrò a mettere le 16 "bombe"

  let bombe = arreyBombe(1, number, 16);

  console.log(bombe);

  for (let i = 1; i <= number; i++){

    // creo il mio elemento

     let col = createElement ('div', 'col');

     col.classList.add(addClass);

      
    //   appendo al mio elemento le i
     col.append(i);
   
      // appendo le col alla row
      row.append (col);


     //  creo arrey degli elementi cliccati
      let = arrClick =[];


     //   stabilisco che al click di ogni cella il colore cambierà
     
     col.addEventListener ('click',
       function(){

         //  se il numero cliccato non è già incluso nel mio arrey allora aggiungilo
         if(!arrClick.includes(i)){

           arrClick.push(i);

         }

         if(arrClick.length == (number - 16)){

           alert('Hai vinto!');
         }
     
         console.log(arrClick);

         

         // verifico se l'utente clicca su una boma

         for( let e = 0; e < bombe.length; e++){

           const bombeIesimo = bombe [e];

           if(bombeIesimo == i){

             col.classList.add('red');

             alert('Hai perso! hai fatto ' + (arrClick.length - 1) + ' punti');

             // row.innerHTML = "";

           }
         }

           col.classList.add('lightblue');

           console.log(i);


       });

   }      
}



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















