let submitButton = document.getElementById('submit');
submitButton.addEventListener('click', calculate);


function calculate() {
    let monthlySalary = parseInt(document.getElementById('monthly').value)
    // console.log(typeof(monthlySalary))
    // let monthylSalaryString = monthlySalary.toLocaleString();

    let necessities = monthlySalary * 0.5;
    let wants = monthlySalary * 0.3;
    let savings = monthlySalary * 0.2;


    alert ("Necessities: $" + necessities.toLocaleString() + "\nWants: $" + wants.toLocaleString() + "\n Savings: $" + savings.toLocaleString());


}

