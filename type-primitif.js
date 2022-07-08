// pour déclencher le script se placer dans le dossier "FRANCKY" et taper : 
// node type-primitif.js

// backticks c'est `` et ça permets d'afficher des variables dedans avec ${nom de la variable}

let fruits = {
    superbon : "cerise",
    sucre : ["banane","pamplemousse","pomme"],
    acide : {
        1: "yhj",
        2: "kjnlk",
        3: "ghjk"
    }
  };

for(let i = 0; i < fruits.sucre.length ; i++){
    console.log("j'adore les" + " " + fruits.sucre[i] + " afficher avec une boucle for")
}

fruits.sucre.forEach((fruit) => {
    // deux façon différentes de faire la même chose
    console.log(`j'adore les ${fruit} afficher avec ue boucle forEach et des backticks`)
})
