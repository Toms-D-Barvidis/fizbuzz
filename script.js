function getValues() {
    var startingValue = document.getElementById("starting-value").value;
    var endValue = document.getElementById("end-value").value;
    var fizzValue = document.getElementById("fizz-value").value;
    var buzzValue = document.getElementById("buzz-value").value;

    console.log("Values saved");

    for (let i = 1; i <= endValue; i++){
        const fizzBuzzDiv = document.getElementById("fizzbuzz-container");
        const newDiv = document.createElement("div");
        if (i % (fizzValue * buzzValue) == 0){
            newDiv.className = "fizzbuzz";
        } else if (i % fizzValue == 0){
                newDiv.className = "fizz"
            } else if (i % buzzValue == 0) {
                newDiv.className = "buzz"
            } else {
                newDiv.className = "nofizzbuzz"
            };
        
        newDiv.innerHTML = i;
        fizzBuzzDiv.appendChild(newDiv);
    }
}





//     // iterate through the array and add cars
//     for (let i =0; i <cars.length; i++){
//         console.log("Car", cars[i]);
//         // addToList(list_el, cars[i], "car")
//         if (i % 2 === 0){
//             addToList(list_el, cars[i], "even-car");
//         } else
//         addToList(list_el, cars[i], "odd-car");
//     }
    
// }