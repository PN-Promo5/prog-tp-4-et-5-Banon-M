console.log("EXERCICE 1");
//Exercice 1
// Créez une fonction qui prend en paramètre un tableau et qui affiche en console tous les éléments de ce tableau.
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //Création du tableau
function displayTab(table) { //Création de la fonction qui à pour role, d'afficher en console tous les éléments
  let i = 0; //variable intermediaire utilisée lors de l'énumération
  let currentElement; //variable intermediaire utilisée lors du traitement séquentiel.
  while (i < table.length) { //condition de continuation " tant que i est plus petit que le dernier indice du tableau"
    currentElement = table[i] //Récuperation de l'élément courant(qui prend la valeur de l'indice).
    i = i + 1 //MAJ de la var intermédiaire utilisée pour énumérer.
  }
  console.log(currentElement);
};
displayTab(alphabet); //on fait appel a la fonction qui va s'éxécuter pour le tableau "alphabet"

//-------------------------------------------------------------

console.log("EXERCICE 2");
// Exercice 2
// Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 premiers éléments de ce tableau.
let alphabet2 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //Création du tableau
function display10FirstLetter(table) { //Création de la fonction qui à pour role, d'afficher les 10 premier elements du tableau
  let i = 0; // var intermediaire utilisée lors de l'énumération
  let currentElement; //var intermédiaire utilisée lors du traitement séquentiel
  if (table.length >= 10) { //Condition Si le tableau à un nombre d'élément egal ou supérieur a 10
    while (i < 10) { //condition de continuation "tant que i est inferieur a 10"
      currentElement = table[i] //Récup de l'éléément courant
      i = i + 1 //Mise à jour de la var intermediaire pour l'énumération
      console.log(currentElement);
    }
  } else { //Sinon si ce n'est pas égal ou supérieur à 10 élément et que le tableau à plus de 10 éléments
    while (i < table.length) {
      currentElement = table[i] //Récup de l'éléément courant
      i = i + 1 //Mise à jour de la var intermediaire pour l'énumération
      console.log(currentElement);
    }
  }
};
display10FirstLetter(alphabet2);

//-------------------------------------------------------------

console.log("EXERCICE 3");
// Exercice 3
// Créez une fonction qui prend en paramètre un tableau et qui affiche en console les 10 derniers éléments de ce tableau.
let alphabet3 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']; //Création du tableau
function display10LastLetter(table) { //Fonction qui va permettre d'afficher les 10 derniers éléments du tableau.
  let i = 0; //var intermediaire utilisé pour l'énumération
  let j = table.length - 1; //J vauxla longeur du tableau. var intermédiaire utilisé aussi pour l'énumération
  let currentElement; //var intermédiaire utilisée lors du traitement séquentiel
  if (table.length >= 10) { //Condition Si le tableau à un nombre d'élément egal ou supérieur a 10
    while (i < 10) {
      currentElement = table[j]
      i = i + 1;
      j = j - 1;
      console.log(currentElement);
    }
  } else {
    while (i < table.length) {
      currentElement = table[j]
      i = i + 1;
      j = j - 1;
      console.log(currentElement);
    }
  }
};
display10LastLetter(alphabet3);

//-------------------------------------------------------------

console.log("EXERCICE 4");
// Exercice 4
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie une copie de ce tableau dans laquelle tout les nombres ont été augmentés de 1.
let tabNbr4 = [1, 2, 33, 4, 5, 6, 7, 8, 9, 10]; //Création du tableau numérique
function displayNbrMoreOne(table) {
  let i = 0; //var intermediaire utilisé pour l'énumération
  let currentElement; //Var intermediaire utilisé lors du traitement séquentiel.
  let tabNbrLevel2 = []; //tableau qui va etre renvoyer sur la console par la fonction.
  while (i < table.length) { // condition de continuation "Tant que "
    currentElement = table[i]; //Récup de l'éléément courant
    i = i + 1; //MAJ de la var intermédiaire utilisée pour énumérer.
    currentElement = currentElement + 1; // l'élément courant prend +1
    tabNbrLevel2.push(currentElement); //ajout des valeur de l'élément courant dan le tableau 2

    console.log(currentElement);
  }
  return currentElement;
};
let a = displayNbrMoreOne(tabNbr4) //Renvoi la copie du tableau

//-------------------------------------------------------------

console.log("EXERCICE 5");
// Exercice 5
// Créez une fonction qui prend en paramètre un tableau de nombres et qui, pour tous les éléments de ce tableau, affiche si cet élément est pair ou non.
let tabNbr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //Création du tableau numérique
function displayEvenOdd(table) {
  let i = 0; //var intermediaire utilisé pour l'énumération
  let currentElement; //Var intermediaire utilisé lors du traitement séquentiel.
  let even = " Even Number"; //Message si l'élément est pair
  let odd = " Odd Number"; //Message si l'élément est impair
  while (i < table.length) { // condition de continuation "Tant que "
    currentElement = table[i]; //Récup de l'éléément courant
    i = i + 1; //MAJ de la var intermédiaire utilisée pour énumérer.
    if (currentElement % 2 == 0) { //Si on divise currentElement est qui est égale a 0 alos il est pair.
      console.log(currentElement + even); // alors afficher en console le numéro et le message even
    } else {
      console.log(currentElement + odd); //SInon afficher en console le numéro et le message odd
    }
  }
};
displayEvenOdd(tabNbr5);

//-------------------------------------------------------------

console.log("EXERCICE 6");
// Créez une fonction qui prend en paramètre un tableau de nombres, et qui renvoie la somme des éléments de ce tableau.
let tabNbr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //Création du tableau numérique
function displaySUM(table) {
  let i = 0; //var intermediaire utilisé pour l'énumération
  let j = 0;
  let currentElement; //Var intermediaire utilisé lors du traitement séquentiel.
  while (i < table.length) { // condition de continuation "Tant que "
    currentElement = table[i]; //Récup de l'élément courant
    i = i + 1; //MAJ de la var intermédiaire utilisée pour énumérer.
    j = j + currentElement // j represente la somme des élément.
  }
  currentElement = j;
  console.log(currentElement);
  return currentElement;
};

let sum = displaySUM(tabNbr6) //Permet de renvoyer la somme des éléments du tableau

//-------------------------------------------------------------

console.log("EXERCICE 7");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie le nombre d’éléments pairs de ce tableau.
let tabNbr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]; //Création du tableau numérique
function displayEvenNbr(table) {
  let i = 0; //var intermediaire utilisé pour l'énumération
  let j = 0; //var qui récupére les nombre pair
  let currentElement; //Var intermediaire utilisé lors du traitement séquentiel.
  while (i < table.length) { // condition de continuation "Tant que "
    currentElement = table[i]; //Récup de l'éléément courant
    i = i + 1; //MAJ de la var intermédiaire utilisée pour énumérer.
    if (currentElement % 2 == 0) { //Si on divise currentElement est qu'il est égale a 0 alos il est pair.
      j = j + 1 // à chaque fois que un currentElement = 0 alors j prend +1
    }
  }
  currentElement = j;
  console.log("Il y a " + currentElement + " nombres pairs");
  return currentElement
};

let even = displayEvenNbr(tabNbr7); //Renvoi le resultat de la fonction

//-------------------------------------------------------------

console.log("EXERCICE 8");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie la valeur maximum de ce tableau.
let tabNbr8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 1111, 23323]; //Création du tableau numérique
function displayNbrMax(table) {
  let i = 0; //var intermediaire utilisé pour l'énumération
  let j = 0;
  let currentElement; //Var intermediaire utilisé lors du traitement séquentiel.
  while (i < table.length) { // condition de continuation "Tant que "
    currentElement = table[i]; //Récup de l'éléément courant
    i = i + 1; //MAJ de la var intermédiaire utilisée pour énumérer.
    if (currentElement > j) { //si currentElement (element du tableau) est plus grand que j
      j = currentElement // alors j = currentElement car 'j' aura la valeur la plus grande pour chaque cycle de boucle.
    }
  }
  //Lorsque le WHILE aura parcouru tous le tableau, currentElement vaudra la dernière valeur de j
  console.log("Le plus gros nombre du tableau est : " + currentElement);
  return currentElement;
};

let nbrMax = displayNbrMax(tabNbr8);


console.log("EXERCICE 9");
// Exercice 9 :
// Créez une fonction qui prend en paramètre un tableau de nombres et qui affiche la valeur maximum et minimum de ce tableau.
let tabNbr9 = [30, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1]; //Création du tableau numérique
function displayNbrMaxAndMini(table) {
  let i = 0; //var intermediaire utilisé pour l'énumération
  let j = 0;
  let k = table[table.length - 1];
  let currentElement; //Var intermediaire utilisé lors du traitement séquentiel.
  while (i < table.length) { // condition de continuation "Tant que i est "
    currentElement = table[i]; //Récup de l'éléément courant
    i = i + 1; //MAJ de la var intermédiaire utilisée pour énumérer.
    if (currentElement > j) { //si currentElement (element du tableau) est plus grand que j
      j = currentElement // alors j = currentElement
    }
    if (currentElement < k) {
      k = currentElement
    }
  }
  //Lorsque le WHILE aura parcouru tous le tableau currentElement vaudra la dernière valeur de j
  currentElement = ("Le nombre le grand est " + j + " et le nombre le plus petit est " + k)

  console.log(currentElement);
};

displayNbrMaxAndMini(tabNbr9);

//-------------------------------------------------------------

console.log("EXERCICE 10");
// // Exercice 10 :
// //Créez une fonction qui prend en paramètre un tableau de nombres et qui renvoie vrai si ce tableau est ordonné dans l’ordre croissant, faux si ce n’est pas le cas.
let tabNbr10 = [1, 9, 46, 51, 55, 63, 73, 75, 80, 110]; //Création du tableau numérique
function displayGrowing(table) {
  let i = 0; // var intermediaire utilisé lors du traitement séquentiel
  let j = table[0]; //var intermediaire utilisé pour récupérer la valeur précédente.
  let currentElement; //var intermediaire utlisé lors du traitement séquentiel
  while (i < table.length) { // tant que i n'a pas attein la derniers indice du tableau
    currentElement = table[i]; // récupère l'élément courant
    i = i + 1; // Mise a jour pour l'énumération
    if (currentElement < j) { //si currentElement est plus petit que la var j / donc si currentElement est plus petit que la valeur précédente
      console.log("faux"); // alors le tableau est faux est pas dans l'ordre croissant
      return;
    } else { //sinon j prend la valeur de currentElement et le résultat est vrai
      j = currentElement
    }
  }
  console.log("vrai");
  return;
};
let growing = displayGrowing(tabNbr10);

//-------------------------------------------------------------

console.log("EXERCICE 11");
// Exercice 11 :
// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, chaque élément n'a qu'une seule occurrence.
let tabNbr11 = [9, 100, 100, 11, 12, 1310, 14, 1310, 1310, 9, 15, 16, 17, 18, 19, 20] // Tableau de nombre avec des doublons.

function displayNotDouble(table) { //Fonction qui va permettre de returner un tableau sans double
  let i = 0; // intermediaire utilisé lors du traitement séquentiel
  let currentElement; //var intermediaire utlisé lors du traitement séquentiel
  let tabNotDouble = []; //Second tableau qui va être retourné.
  while (i < table.length) { // condition de continuation
    currentElement = table[i];
    if (tabNotDouble.indexOf(currentElement) === -1) { //condition Si la valeur de currentElement vaut le resultat -1 de indexOf. (qui signifie qu'il existepas)
      tabNotDouble.push(currentElement); //alors ajouter l'élément au second tableau
    }
    i++ // et i évolue de 1 indice.
  }
  return tabNotDouble
}

console.log(displayNotDouble(tabNbr11));

//-------------------------------------------------------------

console.log("EXERCICE 12");
// Créez une fonction qui prend en paramètre un tableau de nombres et qui retourne un autre tableau de nombres constitué des éléments du tableau passé en paramètre. Dans le tableau retourné, l'ordre des éléments est inversé.
//Ressemble beaucoup a l'éxercice 3 mais avec un nouveau tableau.
let tabNbr12 = [34, 2, 3, 4, 5, 6, 33, 8, 9, 113]; //Création du tableau numérique
function displayReverse(table) {
  let i = 0; //var intermediaire utilisé pour l'énumération
  let j = table.length - 1; // variable qui va permettre de récupérer la valeur à inverssé.
  let currentElement; //Var intermediaire utilisé lors du traitement séquentiel.
  let tabNbrReverse = []; //tableau qui va etre renvoyer sur la console par la fonction.
  while (i < table.length) { // condition de continuation "Tant que "
    currentElement = table[j]; //Récup de l'éléément courant / récupération de la valeur j
    i = i + 1; //MAJ de la var intermédiaire utilisée pour énumérer.
    j = j - 1; //Maj de la var int utilisé pour récupérer les valeur inversé./ elle prend la valeur de l'indice qui est juste avant donc la prochaine valeur du currentElement
    tabNbrReverse.push(currentElement); // ajout de l'élément current au nouveau tableau
  }
  console.log(tabNbrReverse); // Affiche le tableau inversé dans la console.
};

displayReverse(tabNbr12);

//-------------------------------------------------------------

console.log("EXERCICE 13");
// Exercice 13 :
// Créez une fonction qui prend en paramètres deux tableaux de nombres et qui retourne un tableau correspondant à la concaténation des deux tableaux d'entiers passés en paramètres.

let tabNbr13A = [1, 2, 3, 4, 5, 6, 33, 8, 9, 10];
let tabNbr13B = [11, 12, 13, 14, 15, 16, 17, 18, 19, 113];

function displayConcat(tableA, tableB) { //création de la fonction avec en parametre 2 tableaux
  let i = 0; //variable intermediaire utilisée lors de l'énumération
  let j = tableA.length; // var intermediaire utilisé pour la concaténation
  let currentElement; //variable intermediaire utilisée lors du traitement séquentiel.
  let tabNbrConcat = []; //Création du deuxieme tableau qui renvoi le résutat de la fonction
  while (i < j) { //condition de continuation "tant que i est plus petit que le derniers indice du tableau placé en premier parametre
    i = i + 1; //MAJ de la var intermédiaire utilisé pour l'énumération
    currentElement = tableA[i]; // La var intermediaire utilisé lors du traitement séquentiel prend la valeur de i
  }
  if (i = j) { //Si i est égal à la derniers valeur du premier tableau en paramètre
    currentElement = tableA.concat(tableB); // alors currentElement prend pour valeur la concaténation des deux tableau en paramètre
    tabNbrConcat.push(currentElement); //Ajout de currentElement au tableau
  }
  console.log(tabNbrConcat);
  return tabNbrConcat;
};

displayConcat(tabNbr13A, tabNbr13B)

/*VERSION SIMPLE
let tabNbr13A = [1, 2, 3, 4, 5, 6, 33, 8, 9, 10];
let tabNbr13B = [11, 12, 13, 14, 15, 16, 17, 18, 19, 113];
function displaySimpleConcat(tableA, tableB){//fonction avec 2 parametres (2tableaux)
  let tabConcatSimple = [];//Création d'un tableau qui va récuperer les donnnées
  let concatTab = tableA.concat(tableB);//COncaténation grace a la methode de concatenation.
  tabConcatSimple.push(concatTab);//ajout de concatTab dans le nouveau tableau.

console.log(tabConcatSimple);
};
displaySimpleConcat(tabNbr13A, tabNbr13B);*/

//-------------------------------------------------------------

console.log("EXERCICE 14");
// Créez une fonction qui prend en paramètre un tableau de chaînes de caractères, qui copie dans un nouveau tableau tous les éléments du tableau passé en paramètre commençant par une voyelle.
let tabRandomWord = ["azerty", "ballon", "coline", "euro", "fourchette", "hache", "ignorer", "yaourt"]; //Création du tableau
function displayVowel(table) {
  let currentElement;
  let tabVowel = []
  for (let i = 0; i < table.length; i = i + 1) { //for déclaration de i // tant que i n'est pas au dernier indice du tableau // i prend plus 1
    currentElement = table[i]; // var intermédiaire de traitement séqentiel prend la valeur de l'indice.
    if (currentElement.charAt(0) === "a") { //Si la premiere lettre de l'élément de currentElement vaut a
      tabVowel.push(currentElement); // ajouter l'élémentcourant dans le tableau de la fonction
    } else if (currentElement.charAt(0) === "e") {
      tabVowel.push(currentElement);
    } else if (currentElement.charAt(0) === "i") {
      tabVowel.push(currentElement);
    } else if (currentElement.charAt(0) === "o") {
      tabVowel.push(currentElement);
    } else if (currentElement.charAt(0) === "u") {
      tabVowel.push(currentElement);
    } else if (currentElement.charAt(0) === "y") {
      tabVowel.push(currentElement);
    }
  }
  console.log(tabVowel);
};
displayVowel(tabRandomWord);


/*function displayVowel(table) {
  let i = 0;
  let currentElement;
  let tabVowel = []
  while (i < table.length) {
    i = i + 1;
    currentElement = table[i];
  if (currentElement.charAt(0) === "a") {
    tabVowel.push(currentElement);
  }
  if (currentElement.charAt(0) === "e") {
    tabVowel.push(currentElement);
  }
  if (currentElement.charAt(0) === "i") {
    tabVowel.push(currentElement);
  }
  if (currentElement.charAt(0) === "o") {
    tabVowel.push(currentElement);
  }
  if (currentElement.charAt(0) === "u") {
    tabVowel.push(currentElement);
  }
  if (currentElement.charAt(0) === "y") {
    tabVowel.push(currentElement);
  }}
  console.log(tabVowel);
};

displayVowel(tabRandomWord);*/

//-------------------------------------------------------------

console.log("EXERCICE 15");
// Créez une fonction qui prend en paramètre une chaîne de caractères, qui renvoie vrai si la chaîne est
// un palindrome, ou qui renvoie faux si ce n’est pas le cas.
let palindromeWord = "ana";

// /* ------------A FAIRE CORRECTEMENT EN TRAITEMENT SÉQUENTIEL!!!!!!!!!!-----------------------
// function displayPalindrome(word) {
//  let i = 0;
//  let currentElement
//  while (i < word.length) {
//  i++;
//    currentElement= word[i]
//  }
//    if (currentElement.split("").reverse().join("") === currentElement) {
//     console.log("vrai");
//   } else {
//     console.log("faux");
//   }
// };
// let eissai = displayPalindrome(palindromeWord);

//-------------------------------------------------------------

console.log("EXERCICE 16");
// Créez une fonction qui prend en paramètre deux chaînes de caractères, qui renvoie vrai si la 1ère
// chaîne est un anagramme de la 2ème chaîne, ou qui renvoie faux si ce n’est pas le cas.

let wordA = "army";
let wordB = "mary";
// function displayAnagramme(word1, word2)
//
// for(j=x.length; j>=0; j--)
// {y=y+x.charAt(j)}
// return y
// }
// let eissai2= displayAnagramme(wordA, wordB)
