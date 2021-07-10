var btns = document.querySelectorAll('input[type="button"]');
var btnLength = btns.length;
var textInput = document.getElementById("calc-screen");

for(var i=0; i<btnLength; i++) {

    btns[i].addEventListener("click", function() {

        var btnvalue = this.value;

        btnCalculator(btnvalue);
        
    });

}

document.addEventListener("keydown", function(event) {

    var keyvalue = event.key;

    keyboardCalculator(keyvalue);
    
});

// Using buttons to calculate
function btnCalculator(val) {

    if(val=="DEL") {
        textInput.value = textInput.value.substr(0, textInput.value.length - 1);
    }
    else if (val=="RESET") {
        textInput.value = "";
    }
    else if (val=="=") {
        textInput.value = eval(textInput.value);
    }
    else {
        textInput.value += val;
    }

}

// Using keyboard to calculate
function keyboardCalculator(val) {
    if(val=="Backspace") {
        textInput.value = textInput.value.substr(0, textInput.value.length - 1);
    }
    else if (val=="=") {
        textInput.value = eval(textInput.value);
    }
    else {
        textInput.value += val;
    }
}
