// let submitButton = document.getElementById("submit");



function calculate() {
    let monthlySalary = parseInt(document.getElementById('monthly').value)
    // console.log(typeof(monthlySalary))
    // let monthylSalaryString = monthlySalary.toLocaleString();

    let necessities = monthlySalary * 0.5;
    let wants = monthlySalary * 0.3;
    let savings = monthlySalary * 0.2;

    let necessitiesContent = document.getElementById('necessitiesText');
    let wantsContent = document.getElementById('wantsText');
    let savingsContent = document.getElementById('savingsText');


    // alert ("Necessities: $" + necessities.toLocaleString() + "\nWants: $" + wants.toLocaleString() + "\nSavings: $" + savings.toLocaleString());

    necessitiesContent.innerHTML = "Necessities : $" + necessities.toLocaleString();
    wantsContent.innerHTML = "Wants: $" + wants.toLocaleString();
    savingsContent.innerHTML = "Savings: $" + savings.toLocaleString();
}

// submitButton.addEventListener('click', calculate);

// Contact Form

const factsTransport = ["In 2019, Americans took 9.9 billion trips on public transportation.", 
"34 million times each weekday, people board public transportation.",
 "Approximately 6,800 organizations provide public transportation in the United States.",
"Every $1 billion invested in public transportation supports and creates approximately 50,000 jobs.",
"Traveling by public transportation is 10 times safer per mile than traveling by automobile.",
"A person can reduce his or her chance of being in an accident by more than 90% simply by taking public transit as opposed to commuting by car."
];

function randomGenerator(max) {
    return Math.floor(Math.random() * max);
}

function changeFact() {
    let randomNumber = randomGenerator(factsTransport.length);

    document.getElementById('transporationFact').innerHTML = factsTransport[randomNumber];
}