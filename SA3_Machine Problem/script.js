document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const clear = document.getElementById("clear");
    const del = document.getElementById("delete");
    const dot = document.getElementById("dot");
    const divide = document.getElementById("divide");
    const numButtons = document.querySelectorAll(".num-button");
    const add = document.getElementById("add");
    const subtract = document.getElementById("subtract");
    const multiply = document.getElementById("multiply");
    const equals = document.getElementById("equals");

    
    clear.addEventListener("click", function() {
        display.value = '';
    });

    
    del.addEventListener("click", function() {
        display.value = display.value.slice(0, -1);
    });

    
    dot.addEventListener("click", function() {
        display.value += '.';
    });

    
    divide.addEventListener("click", function() {
        display.value += '/';
    });

    
    numButtons.forEach(button => {
        button.addEventListener("click", function() {
            display.value += button.value;
        });
    });

    add.addEventListener("click", function() {
        display.value += '+';
    });

    
    subtract.addEventListener("click", function() {
        display.value += '-';
    });

    
    multiply.addEventListener("click", function() {
        display.value += '*';
    });

    
    equals.addEventListener("click", function() {
        display.value = eval(display.value);
    });
});
