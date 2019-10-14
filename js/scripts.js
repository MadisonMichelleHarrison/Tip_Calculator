function calculateTip() {

    var billAmount = document.getElementById("billAmt").nodeValue;
    console.log(billAmount);
    
    var serviceQuality = document.getElementById("serviceQual").nodeValue;
    console.log(serviceQuality);

    var numberOfPeople = document.getElementById("numPeople").nodeValue;
    console.log(numberOfPeople);

    var amount = Number(billAmount);
    if (isNaN(amount) || amount <= 0) {
        alert("Invalid input for bill amount.");
        return;
    }

    var service = Number(serviceQuality);

    if (service === 0) {
        alert("You must pick an option for service quality.");
        return;
    }

    var people = Number(numberOfPeople);

    if (isNaN(people) || people < 1) {
        alert("Enter a valid number of people splitting the bill.");
        return;
    }

    var tipPerPerson = (amount * service) / people;

    var totalPerPerson = amount / people + tipPerPerson;

    tipPerPerson = tipPerPerson.toFixed(2);

    totalPerPerson.toFixed(2);

    document.getElementById("tipAmount").style.display = "block";
    document.getElementById("tip").innerText = tipPerPerson;
    document.getElementById("Total").innerText = totalPerPerson;
}

function reset() {
    document.getElementById("billAmt").value = "";
    document.getElementById("serviceQual"). value = "0";
    document.getElementById("numPeople").value = "";
    document.getElementById("tipAmount").style.display = "none";
}

document.getElementById("calculateTip").onclick = function() {
    calculateTip();
} 

document.getElementById("reset").onclick = function() {
    reset();
}