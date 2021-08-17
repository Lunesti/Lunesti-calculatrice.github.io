const display = document.querySelector('.screen-result');
const form = document.getElementById("myForm");
const number = document.querySelectorAll('form input[name="number"]');
const reset = document.querySelector('form input[name="reset"]');

for (elem of number) {
    elem.addEventListener('click', function() {
        display.textContent += this.value;
    });
}

if (reset) {
    reset.addEventListener('click', function() {
        display.textContent = "";
    })
}