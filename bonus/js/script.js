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

  for (let i = 1; i <= number; i++){
    // creo il mio elemento
     let col = createElement ('div', 'col');

      col.classList.add(addClass);

     //  col.classList.add(addClass);
     
     //   appendo al mio elemento le i
     col.append(i);

    
     //   stabilisco che al click di ogni cella il colore cambierà
     col.addEventListener ('click',
        function(){
           col.classList.add('lightblue');
           console.log(i);
      });
 
     // appendo le col alla row
     row.append (col);
 
  }    

}















