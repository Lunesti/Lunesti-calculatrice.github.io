/*----DOM-----*/

const form = document.getElementById("myForm");
const del = document.querySelector('form input[name="del"]');
const reset = document.querySelector('form input[name="reset"]');
const add = document.querySelector('form input[name="add"]');
const soustract = document.querySelector('form input[name="soustract"]');
const multiplicate = document.querySelector('form input[name="multiplicate"]');
const division = document.querySelector('form input[name="division"]');
const point = document.querySelector('form input[name="point"]');
const numbers = document.querySelectorAll('form input[name="touch"]');
let display = document.querySelector('.display');


//Valeur par défaut du display 
display.textContent = 0;

//Stocker la valeur de l'écran précédent 
let prev = 0;

//Stocker l'affichage de l'écran 
let show = '';

//On stocke l'opération
let operator = null;

for (elem of numbers) {
    elem.addEventListener('click', touchEvent);
}

/*Cette fonction réagit au clic sur les touches*/

function touchEvent() {
    console.log(this.value);
    //display.textContent += this.value;
    let touch = this.value;
    //Si c'est un chiffre ou un point
    if (touch || point) {
        //Si l'affichage est vide, on récupère la touche , sinon on concatène avec ce qu'il y a déjà dans l'affichage
        show = (show === "" ? touch.toString() : show + touch.toString());
        display.textContent = show;
    }
}

if (reset) {
    reset.addEventListener('click', clear);
}


function clear() {
    prev = 0;
    show = "";
    operator = null;
    display.textContent = 0;
}

/*Effectue le calcul */
function calcul(nb1, nb2, operator) {
    //Convertir les chaines de caractères en nombres
    if (operator === add) return nb1 + nb2;
    if (operator === multiplicate) return nb1 * nb2;
    if (operator === soustract) return nb1 - nb2;
    if (operator === division) return nb1 / nb2;

}