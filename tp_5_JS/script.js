// PARTIE 1 : TRAITEMENT DES DONNÉE
console.log("PARTIE 1");
console.log("Exercice 1.1 1.2");
/*Exercice 1
En JavaScript, créez une fonction permettant d’ajouter au tableau un profil-utilisateur. Cette fonction doit demander paramètres 5 chaînes de caractères
Lors de l’ajout dans le tableau, l’identifiant doit être généré automatiquement. Cet ID doit être
unique (deux utilisateurs ne peuvent pas partager le même identifiant).*/

let tabProfil = [
  ["Mathias", "Ritrono", "34", "Nantes", "mr@yopmail.com", "1"],
  ["Salif", "Bamogo", "20", "Brest", "sb@yopmail.com", "2"],
  ["Kristina", "Pavlov", "23", "Villeurbanne", "kp@yopmail.com", "3"],
  ["Elise", "Seti", "30", "Grenoble", "es@yopmail.com", "4"],
  ["Pierrick", "Di Angelo", "18", "Strasbourg", "pd@yopmail.com", "5"],
  ["Mohamed", "Khaoui", "23", "Lille", "mh@yopmail", "6"],
  ["Paige", "Anderson", "42", "Evry", "pa@yopmail.com", "7"],
]

function pushProfil(firstName, name, age, city, mail) { //Fonction à 5 paramètres pour chaques éléments des sous tableaux
  let tabNewUser = []; // tableau du nouveau profil enregistré.
  let i = 0; //var intermédiaire utilisé lors de l'énumération
  let login; //var intermediaire utilisé pour le traitement séquentiel
  tabNewUser.push(firstName); //ajout des paramètres dans le nouveau tableau
  tabNewUser.push(name);
  tabNewUser.push(age);
  tabNewUser.push(city);
  tabNewUser.push(mail);
  while (i < tabProfil.length) { // condition de continuation " Tant que l'indice i n'est pas le dernier du tableau des profils"
    i++ // i prend +1 / Mise à jour de la var intermédiaire d'énumération.
    login = i + 1; // 'login' prend pour valeur le numéro de l'indice et ajoute 1.
  }
  tabNewUser.push(login); // Ajout du numéro de login dans le tableau des nouveaux utilisateurs
  tabProfil.push(tabNewUser); // Ajout du tableau du nouvel utilisateur dans le tableau des profils
  return tabProfil;
};
pushProfil("Marvin", "Banon", "25", "Nantes", "mb@hhm.fr"); //Exemple de nouvel utilisateur
pushProfil("olive", "Atton", "22", "Madrid", "oa@hhm.fr");
pushProfil("Marc", "Landers", "17", "Barcelone", "ml@gkgk.fr");

console.log(tabProfil);


console.log("Exercie1.3");
/*En JavaScript, créez une fonction qui prend en paramètre une chaîne de caractères
correspondant à une ville. Cette fonction retourne, sous forme de tableau à 2 dimensions, les profils
des utilisateurs habitant dans cette ville.*/
function userCity(table, city) { // Fonction qui va permettre de récuperer les utilisateurs de la même ville.
  let tabUserCity = []; //Tableau qui va récuperer les valeurs
  let i = 0; //var intermédiaire utilisé lors de l'énumération
  let currentElement; //var intermediaire utilisé pour le traitement séquentiel
  let j; //var intermédiaire utilisé pour l'énumération.
  let currentElement2; //var intermédiaire utilisé pour le traitement séquentiel
  while (i < table.length) { // condition de continuation, / Tant que le 'i' est plus petit que le dernier indice du tableau.
    currentElement = table[i]; //currentElement vaut la valeur de l'indice i
    j = 0;
    while (j < table[i].length) { // tant que 'j' est plus petit que la dernière valeur du tableau principal
      j++; //j prend +1
      currentElement2 = table[i][j]; // currentElement2 vaut la valeur de l'indice i - j (exemple indice 2 du tableau principal, indice 3 du sous-tableau = ' Villeurbanne'  )
      if (city === currentElement2) { // si le nom de la ville city placé en parametre est égal a currentElement2
        tabUserCity.push(table[i]); //alors ajout de la ligne 'i' en entier au tableau d'utilisateur par ville.
      }
    }
    i++; // Lorsque chaques éléments le l'indice 'i' est inspécter on ajoute 1 à l'indice pour changer de ligne.
  }
  return tabUserCity
};
console.log(userCity(tabProfil, "Nantes")); //Exemple si on recherche pour la ville de Nantes.


console.log("Exercice 1.4");
/*une fonction qui prend en paramètre une chaîne de caractères
correspondant à un prénom ou un nom. Cette fonction retourne, sous forme de tableau à 2
dimensions, les profils des utilisateurs ayant ce prénom ou ce nom.*/
function userNameFirstName(table, name) { // Fonction qui va permettre de récuperer les utilisateurs de la même ville.
  let tabUserName = []; //Tableau qui va récuperer les valeurs
  let i = 0; //var intermédiaire utilisé lors de l'énumération
  let j; //var intermédiaire utilisé pour l'énumération.
  let currentElement; //var intermediaire utilisé pour le traitement séquentiel
  let currentElement2; //var intermédiaire utilisé pour le traitement séquentiel
  while (i < table.length) { // condition de continuation, / Tant que le 'i' est plus petit que le dernier indice du tableau Principal.
    currentElement = table[i]; //currentElement vaut la valeur de l'indice i
    j = 0;
    while (j < table[i].length) { // tant que 'j' est plus petit que la dernière valeur du tableau
      j++; //j prend +1
      currentElement2 = table[i][j]; // currentElement2 vaut la valeur de l'indice i - j (exemple indice 0 du tableau principal, indice 0 du sous-tableau = ' Mathias'  )
      if (name === table[i][0] || name === table[i][1]) { // si le prenom ou le nom de l'utilisateur placé en paramètre vaut l'indice 0 de la ligne i ou l'indice 1 de la ligne i
        tabUserName.push(table[i]); //alors ajout de la ligne 'i' en entier dans le nouveau tableau.
      }
    }
    i++;
  }
  return tabUserName
};

console.log(userNameFirstName(tabProfil, "Marvin")); //Exemple si on recherche le ou les prénoms 'Marvin'.

console.log("Exercice 1.5");
/*créez une fonction qui prend en paramètre une chaîne de caractères
correspondant. Cette fonction retourne, sous forme de tableau à 2 dimensions, les profils des
utilisateurs dans lesquelles apparaissent la chaîne de caractères passée en paramètre.*/
function userCible(table, word, word1, word2) { // Fonction qui va permettre de récuperer les utilisateurs selon les critère en paramètre.
  let tabUserCible = []; //Tableau qui va récuperer les valeurs
  let i = 0; //var intermédiaire utilisé lors de l'énumération
  let currentElement; //var intermediaire utilisé pour le traitement séquentiel
  let j; //var intermédiaire utilisé pour l'énumération.
  let currentElement2; //var intermédiaire utilisé pour le traitement séquentiel
  while (i < table.length) { // condition de continuation. - Tant que l'indice 'i' est plus petit que le dernier indice du tableau.
    currentElement = table[i]; //currentElement vaut la valeur de l'indice i
    j = 0;
    while (j < table[i].length) { // tant que 'j' est plus petit que la dernière valeur du tableau

      currentElement2 = table[i][j]; // currentElement2 vaut la valeur de l'indice i - j (exemple indice 2 du tableau principal, indice 3 du sous-tableau = ' Villeurbanne'  )
      if (word === currentElement2) { // si le mot en paramètre est égal a currentElement2
        tabUserCible.push(table[i]); //alors ajout de la ligne 'i' en entier au tableau d'utilisateur Cible.
      } else if (word1 === currentElement2) { //Sinon Si mot1 en paramètre est égal a currentElement2
        tabUserCible.push(table[i]);
      } else if (word2 === currentElement2) { //Sinon Si mot2 en paramètre est égal a currentElement2
        tabUserCible.push(table[i]);
      }
      j++; //j prend +1
    }
    i++;
  }
  return tabUserCible
};

console.log(userCible(tabProfil, "Marvin", "30", "Barcelone")); //Exemple si on recherche les utilisateurs qui ont l'élément "Marvin" || "30" || "Barcelone".



//PARTIE 2: AFFICHAGE GRAPHIQUE
console.log("PARTIE 2");
console.log("Exercice 2.1");
/*2.1 – En JavaScript, créez une fonction prenant en paramètres un tableau à 2 dimensions et un booléen.
Cette fonction génère une table HTML (balise <table>) à partir du tableau passé en paramètre.
Si le booléen passé en paramètre vaut VRAI, alors, on considère que la 1ère valeur du
tableau correspond à une en-tête ; la fonction génère dans ce cas des éléments HTML de type <th>.*/
