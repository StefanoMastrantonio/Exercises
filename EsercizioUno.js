// RESISTENZA DI UN NUMERO



// La resistenza di un numero si ottiene moltiplicando tutte le cifre che lo compongono.



// Ad esempio, se si moltiplicano tutte le cifre del numero 882 si ottiene 128 (8*8*2). 

// Ripetendo l'operazione per 128 si ottiene 16 (16).

// Ripetendo l'operazione per 16 si ottiene 6 (1*6). 

// 6 è di una sola cifra, quindi non è più possibile ripetere l'operazione. 

// Dato che siamo riusciti a ripetere l'operazione per 3 volte, diciamo che 882 ha una "resistenza" di 3.



// 1) Scrivere la funzione getResistenza(numero), che restituisce la resistenza di un intero passato come argomento.

// 2) Qual è il numero più resistente che riesci a trovare?


const numero = prompt('inserisci numero');
console.log(numero);

function getResistenza(numero) {
    //imposto la resistenza a 0
    let resistenza = 0;
    while (numero.toString().length > 1) {
    //uso split per dividere il numero inserito in cifre singole e con map converto le stringhe in numeri interi
      let cifre = numero.toString().split('').map(cifra => parseInt(cifra));
      console.log(cifre);
      //inizializzo la variabile prodotto a 1
      let prodotto = 1;
      for (let cifra of numero.toString()) {
        prodotto *= cifra;
        console.log(prodotto);
      }
      numero = prodotto;
      console.log(numero);
      resistenza++;
      console.log(`Moltiplicazione: ${prodotto}, Resistenza: ${resistenza}`);
    }
    return resistenza;
  }


console.log(getResistenza(numero));

let numeroPiuResist = 0;
let resistenzaMax = 0;

for (let i = 1; i <= 1000; i++) {
  let resistenza = getResistenza(i);
  if (resistenza > resistenzaMax) {
    resistenzaMax = resistenza;
    numeroPiuResist = i;
  }
}

console.log(`Il numero più resistente è ${numeroPiuResist} con una resistenza di ${resistenzaMax}`);


