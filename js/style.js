/*----DOM-----*/

const form = document.getElementById("myForm");
const del = document.querySelector('form input[name="del"]');
const reset = document.querySelector('form input[name="reset"]');
let display = document.querySelector('.display');


//Valeur par défaut du display 
display.textContent = 0;

//Stocker la valeur de l'écran précédent 
let prev = 0;

//Stocker l'affichage de l'écran 
let show = '';

//On stocke l'opération
let operator = null;


window.onload = () => {
    const numbers = document.querySelectorAll('form input');
    //Pour chaque chiffre, on écoute le chiffre lors du clique
    for (elem of numbers) {
        elem.addEventListener('click', touchEvent);
    }
}


/*Cette fonction réagit au clic sur les touches*/

function touchEvent() {
    //On stocke la valeur du clique dans touch
    let touch = this.value;
    //SI la touche cliqué est un chiffre OU une virgule
    if (touch >= 0 || touch === '.') {
        //En fonction de si une touche a déjà été cliqué ou non, on va soit récupérer la touche cliqué et le concaténer avec la nouvelle touche, soit afficher la touche cliqué.
        //Si l'affichage est vide, on récupère la touche , sinon on concatène avec ce qu'il y a déjà dans l'affichage
        show = (show === "" ? touch.toString() : show + touch.toString());
        display.textContent = show;
        //Sinon, en appuyant sur les autres touches, on va effectuer les calculs 
    } else {
        //La touche reset réinitialise tout
        switch (touch) {
            case "reset":
                prev = 0;
                show = "";
                operation = null;
                display.textContent = 0;
                break;
                //Calculs
            case "+":
            case "-":
            case "*":
            case "/":
                //Pour calculer, on va vérifier d'abord s'il y a une valeur précédente
                prev = (prev === 0) ? parseFloat(show) : calcul(prev, parseFloat(show), operator);
                //On affiche le résultat du calcul
                display.textContent = prev;
                //On mémorise l'opération (la touche)
                operator = touch;
                //On réinitialise la variable d'affichage
                show = "";

                break;
            case "=":
                //Pour calculer, on va vérifier d'abord s'il y a une valeur précédente
                prev = (prev === 0) ? parseFloat(show) : calcul(prev, parseFloat(show), operator);
                //On affiche le résultat du calcul
                display.textContent = prev;

                //On stocke le résultat
                show = prev;
                //Puis on réinitialise prev;      
                prev = 0;

                break;
        }
    }
}

/*Effectue le calcul */
function calcul(nb1, nb2, operator) {

    //Convertir les chaines de caractères en nombres
    if (operator === "+") return nb1 + nb2;
    if (operator === "*") return nb1 * nb2;
    if (operator === "-") return nb1 - nb2;
    if (operator === "/") return nb1 / nb2;
}