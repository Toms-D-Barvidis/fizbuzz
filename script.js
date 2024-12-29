function getValues() {
    var startingValue = document.getElementById("starting-value").value;
    var endValue = document.getElementById("end-value").value;
    var fizzValue = document.getElementById("fizz-value").value;
    var buzzValue = document.getElementById("buzz-value").value;

    console.log("Values saved");
    const fizzBuzzDiv = document.getElementById("fizzbuzz-container");

    removeAllChildNodes(fizzBuzzDiv);

    for (let i = startingValue; i <= endValue; i++){
        const newDiv = document.createElement("div");
        if ((i % fizzValue == 0) && (i % buzzValue == 0)){
            newDiv.className = "fizzbuzz";
        } else if (i % fizzValue == 0) {
            newDiv.className = "fizz";
        } else if (i % buzzValue == 0) {
            newDiv.className = "buzz";
        } else {
            newDiv.className = "nofizzbuzz";
        }
        
        newDiv.innerHTML = i;
        fizzBuzzDiv.appendChild(newDiv);
    }
}

function wipeAll() {
    const fizzBuzzDiv = document.getElementById("fizzbuzz-container");
    removeAllChildNodes(fizzBuzzDiv);
    
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function setDefaults(){
    document.getElementById("starting-value").value = 1;
    document.getElementById("end-value").value = 100;
    document.getElementById("fizz-value").value = 3;
    document.getElementById("buzz-value").value = 5;
}