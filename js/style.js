/*----DOM-----*/

const form = document.getElementById("myForm");
const del = document.querySelector('input[name="del"]');
const reset = document.querySelector('input[name="reset"]');
const egal = document.querySelector('input[name="egal"]');
let display = document.querySelector('.display');
let head = document.querySelector('.head');
const input = document.querySelector('.switch > input');
const theme = document.querySelector('.theme');
const themeNumber = document.querySelector('.theme-choose');
const themeCalculator = document.querySelector('.calculator');
const themeButton = document.querySelector('.key');
const section = document.querySelector('section');


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


/*----Bouton changeur de thème--- */
input.addEventListener('click', clickEvent);

function clickEvent() {
    console.log("On a cliqué une fois sur le input")
    if (input.checked) {
        section.style.backgroundColor = "hsl(0, 0%, 90%)";
        themeCalculator.style.backgroundColor = "hsl(0, 0%, 90%)";
        themeButton.style.backgroundColor = "hsl(0, 5%, 81%)";
        display.style.backgroundColor = "hsl(0, 0%, 93%)";
        display.style.color = "#000";
        head.style.color = "#000";
        theme.style.color = "#000";
        themeNumber.style.color = "#000";
        del.style.backgroundColor = "hsl(185, 42%, 37%)";
        reset.style.backgroundColor = "hsl(185, 42%, 37%)";
        del.style['boxShadow'] = "0 -0.2vw 0 hsl(185, 58%, 25%) inset";
        reset.style.boxShadow = "0 -0.2vw 0 hsl(185, 58%, 25%) inset";
        egal.style.backgroundColor = "hsl(25, 98%, 40%)";
        egal.style.boxShadow = "0 -0.2vw 0 hsl(25, 99%, 27%) inset";
    } else {
        section.style.backgroundColor = "hsl(222, 26%, 31%)";
        themeCalculator.style.backgroundColor = "hsl(222, 26%, 31%)";
        themeButton.style.backgroundColor = "hsl(223, 31%, 20%)";
        display.style.backgroundColor = "hsl(224, 36%, 15%)";
        display.style.color = "#FFF";
        head.style.color = "#FFF";
        theme.style.color = "#FFF";
        themeNumber.style.color = "#FFF";
        del.style.backgroundColor = "hsl(225, 21%, 49%)";
        reset.style.backgroundColor = "hsl(225, 21%, 49%)";
        del.style.boxShadow = "0 -0.2vw 0 #404E72 inset";
        reset.style.boxShadow = "0 -0.2vw 0 #404E72 inset";
        egal.style.boxShadow = "0 -0.2vw 0 #93261A inset";

    }
}