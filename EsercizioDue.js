// Nell'array di interi [2,4,1,5,6,3,4,2,7,4,5,4,5] il numero 2 è presente 3 volte. Diciamo quindi che 2 ha una "frequenza" di 3.

// Nello stesso array il numero più frequente è 4 (con una frequenza di 4). Il secondo numero più frequente è 5 (con una frequenza di 3).



// 1) Scrivere la funzione getFrequente(array) che restituisce il numero più frequente in un array di interi passato come argomento.

// 2) Scrivere la funzione getFrequenti(array, k) che restituisce un array contenente i primi k numeri più frequenti in un array di interi passato come argomento.

const array =  [2,4,1,5,6,3,4,2,7,4,5,4,5];

function getFrequente(array) {
    //Inizializzo un oggetto vuoto
    let frequenze = {};
  
    // Variabili che utilizzeremo per tenere traccia del numero con la frequenza più alta inizializzo una variabile a zero per la massima frequenza e ne dichiaro un'altra per il numero massimo
    let massimaFrequenza = 0;
    let numeroFrequenzaMaggiore;
  
    // faccio un ciclo for per scorrere tutti gli elementi dell'array.
    for (let i = 0; i < array.length; i++) {
      // Metto una condizione per cui se il numero corrente non è presente ancora nell'oggetto delle frequenze,lo aggiungo con frequenza 1
      if (frequenze[array[i]] === undefined) {
        frequenze[array[i]] = 1;
        // Altrimenti, aggiungo 1 alla sua frequenza
      } else {
        
        frequenze[array[i]]++;
      }
  
      // metto un altro if per fare in modo che se la frequenza del numero corrente è maggiore di quella massima finora trovata, aggiorniamo le variabili massimaFrequenza e numeroFrequenzaMaggiore
      if (frequenze[array[i]] > massimaFrequenza) {
        massimaFrequenza = frequenze[array[i]];
        numeroFrequenzaMaggiore = array[i];
      }
    }
  
    // ritorno il numero con la frequenza più alta
    return numeroFrequenzaMaggiore;
  }

  getFrequente(array);
  console.log(getFrequente(array));