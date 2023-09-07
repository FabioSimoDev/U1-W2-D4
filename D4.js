/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/
const area = function(l1, l2) {
  return l1 * l2;
};
console.log("AREA: ", area(15, 5));

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

const crazySum = function(n1, n2) {
  return n1 != n2 ? n1 + n2 : (n1 + n2) * 3;
};
console.log("somma tra 3 + 3: ", crazySum(3, 3));
console.log("somma tra 5 e 9: ", crazySum(5, 9));

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

const crazyDiff = function(n1) {
  const absDiff = Math.abs(n1 - 19);

  if (n1 > 19) {
    return absDiff * 3;
  } else {
    return absDiff;
  }
};
console.log("differenza assoluta tra 18 e 19: ", crazyDiff(18));

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

const boundary = function(n) {
  if ((n >= 20 && n <= 100) || n === 400) {
    return true;
  }
  return false;
};
console.log(boundary(35) ? "è incluso" : "non incluso");

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

const epify = function(str) {
  if (str.startsWith("EPICODE")) return str;
  return "EPICODE ".concat(str);
};
console.log(epify("CIAO"));

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

const check3and7 = function(n) {
  if (n === 0) return false;
  if (n % 3 === 0 || n % 7 === 0) {
    return true;
  }
  return false;
};
console.log(check3and7(21) ? "è un multiplo" : "non è un multiplo");

/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/
const reverseString = function(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
};
console.log("stringa 'EPICODE' al contrario: ", reverseString("EPICODE"));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

const upperFirst = function(str) {
  const strSplit = str.split(" ");
  if (strSplit.length > 1) {
    for (let i = 0; i < strSplit.length; i++) {
      strSplit[i] = strSplit[i][0].toUpperCase() + strSplit[i].substr(1);
    }

    return strSplit.join(" ");
  }
  return "ERRORE! la stringa deve avere più di una parola.";
};
const str = "ciao amici sono fabio e sono bello";
console.log(
  "stringa originale: " + str + ". stringa in upper case: ",
  upperFirst("ciao amici sono fabio e sono bello")
);

const upperFirst2 = function(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
  }
  let newString = words.join(" ");
  return newString;
};

console.log(upperFirst2("ciao mi chiamo fabio"));

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

const cutString = function(str) {
  if (str.length <= 2) {
    return "Inserisci una frase che contenga più di due caratteri.";
  }
  return str.slice(1, -1);
};
console.log(cutString("ciao"));

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

const giveMeRandom = function(n) {
  let randomNumbers = [];
  let randomNum;
  for (let i = 0; i < n; i++) {
    randomNum = Math.floor(Math.random() * 10) + 1;
    randomNumbers.push(randomNum);
  }
  return randomNumbers;
};
console.log("ecco 7 numeri a cavolo: ", giveMeRandom(7));

console.log("----------------------------------------");
console.log("SEZIONE EXTRA:");
console.log("----------------------------------------");

// Esercizi aggiuntivi (facoltativi) per D4

/* EXTRA 1
 Scrivi una funzione chiamata "checkArray" che riceve un array di numeri casuali (creati con la funzione "giveMeRandom") e per ogni elemento stampa in console
 se il suo valore è maggiore di 5 o no.
 La funzione deve inoltre ritornare la somma di tutti i valori maggiori di 5.
*/

const checkArray = function(nArray) {
  let sum = 0;
  for (let i = 0; i < nArray.length; i++) {
    if (nArray[i] > 5) {
      console.log(nArray[i] + " è maggiore di 5");
      sum += nArray[i];
    } else {
      console.log(nArray[i] + " è maggiore di 5");
    }
  }
  return sum;
};
const nArray = giveMeRandom(9);
console.log(checkArray(nArray));

/* EXTRA 2
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "shoppingCartTotal" che calcola il totale dovuto al negozio (tenendo conto delle quantità di ogni oggetto).
*/

const shoppingCartTotal = function(shoppingCart) {
  let total = 0;
  for (let i = 0; i < shoppingCart.length; i++) {
    const item = shoppingCart[i];
    if (item.hasOwnProperty("price") && item.hasOwnProperty("quantity")) {
      const itemTotal = item.price * item.quantity;
      total += itemTotal;
    }
  }
  return total;
};

const shoppingCart = [
  {
    id: 1,
    name: "Prodotto A",
    price: 10,
    quantity: 2
  },
  {
    id: 2,
    name: "Prodotto B",
    price: 20,
    quantity: 3
  },
  {
    id: 3,
    name: "Prodotto C",
    price: 5,
    quantity: 1
  }
];

console.log("totale: ", shoppingCartTotal(shoppingCart));

/* EXTRA 3
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "addToShoppingCart" che riceve un nuovo oggetto dello stesso tipo, lo aggiunge a "shoppingCart" e ritorna il nuovo numero totale degli elementi.
*/
const shoppingCart2 = [
  {
    id: 1,
    name: "Prodotto 1",
    price: 8,
    quantity: 3
  },
  {
    id: 2,
    name: "Prodotto 2",
    price: 10,
    quantity: 3
  },
  {
    id: 3,
    name: "Prodotto 3",
    price: 6,
    quantity: 2
  },
  {
    id: 4,
    name: "Prodotto 4",
    price: 2,
    quantity: 1
  },
  {
    id: 5,
    name: "Prodotto 5",
    price: 10,
    quantity: 5
  }
];

const addToShoppingCart = function(newItem) {
  shoppingCart2.push(newItem);
  return shoppingCart2.length;
};

const newItem1 = { price: 10, name: "nuovo", id: 1, quantity: 2 };
const newItem2 = { price: 20, name: "nuovo", id: 2, quantity: 1 };

console.log(addToShoppingCart(newItem1));
console.log(addToShoppingCart(newItem2));

/* EXTRA 4
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "maxShoppingCart" che riceve l'array "shoppingCart" e ritorna l'oggetto più costoso in esso contenuto.
*/

function maxShoppingCart(shoppingCart) {
  if (shoppingCart.length === 0) {
    return null;
  }

  let maxItem = shoppingCart[0];

  for (let i = 1; i < shoppingCart.length; i++) {
    if (shoppingCart[i].price > maxItem.price) {
      maxItem = shoppingCart[i];
    }
  }

  return maxItem;
}
console.log("l'oggetto più costoso è: ", maxShoppingCart(shoppingCart2));

/* EXTRA 5
 Nel tuo eCommerce disponi di un'array di oggetti chiamato "shoppingCart". Ognuno di questi oggetti ha le seguenti proprietà: "price", "name", "id" e "quantity".
 Crea una funzione chiamata "latestShoppingCart" che riceve l'array "shoppingCart" e ritorna l'ultimo elemento.
*/
function latestShoppingCart(shoppingCart) {
  if (shoppingCart.length === 0) {
    return null;
  } else {
    return shoppingCart[shoppingCart.length - 1];
  }
}
console.log(
  "l'ultimo prodotto dentro l'ogetto è: ",
  latestShoppingCart(shoppingCart2)
);

/* EXTRA 6
 Crea una funzione chiamata "loopUntil" che riceve un numero intero come parametro con valore tra 0 e 9.
 La funzione è composta da un ciclo che stampa un numero casuale tra 0 e 9 finchè il numero casuale non è maggiore di x per tre volte di fila.
*/

const loopUntil = function(x) {
  let consecutiveCount = 0;

  while (consecutiveCount < 3) {
    const randomNumber = Math.floor(Math.random() * 10);
    console.log(randomNumber);

    if (randomNumber > x) {
      consecutiveCount++;
    } else {
      consecutiveCount = 0;
    }
  }
};
loopUntil(6);

/* EXTRA 7
Crea una funzione chiamata "average" che riceve un array come parametro e ne ritorna la media aritmetica. La funzione salta automaticamente i valori non numerici nell'array.
*/

const average = function(arr) {
  let sum = 0;
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number" && !isNaN(arr[i])) {
      sum += arr[i];
      count++;
    }
  }

  if (count === 0) {
    return NaN;
  }

  return sum / count;
};

const arr = [1, 2, 'tre', 4, 'cinque', 6];
console.log(average(arr));

/* EXTRA 8
 Crea una funzione chiamata "longest" che trova la stringa più lunga all'interno di un array di stringhe fornito come parametro.
*/

const longest = function(stringsArr){
  if (stringsArr.length === 0) return null;
  
  let longestString = stringsArr[0];

  for (let i = 1; i < stringsArr.length; i++) {
    if (stringsArr[i].length > longestString.length) {
      longestString = stringsArr[i];
    }
  }

  return longestString;
}
const stringArray = ["mela", "banana", "fragola", "ananas"];
console.log("la stringa più lunga è: ", longest(stringArray));

/* EXTRA 9
 Crea una funzione per creare un filtro anti-spam per la tua casella email. La funzione riceve un parametro stringa chiamato "emailContent", e torna un valore booleano.
 La funzione deve ritornare true se "emailContent" non contiene le parole "SPAM" o "SCAM".
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 10
 Scrivi una funzione che riceve una data come parametro, e calcola il numero di giorni passati da quella data.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* EXTRA 11
 Scrivi una funzione chiamata "matrixGenerator" che riceve come parametri due numeri interi, "x" e "y".
 Il risultato deve essere una matrice di "x" volte "y", e i valori devono rispecchiare gli indici della posizione all'interno della matrice.
 Es.: x = 3, y = 2
 ["00","01","02"
 "10","11","12"]
*/

/* SCRIVI QUI LA TUA RISPOSTA */
