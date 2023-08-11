// let submitButton = document.getElementById("submit");

// Calculates the user's monthly income using the 50/30/20 rule
// 50 percent for necessities, 30 percent for wants, and 20 percent for savings

function calculate() {
    let monthlySalary = parseInt(document.getElementById('monthly').value)
    
    // After we receive the user's input on their monthly income and turn it into an integer, we then use the 50/30/20 rule

    let necessities = monthlySalary * 0.5;
    let wants = monthlySalary * 0.3;
    let savings = monthlySalary * 0.2;

    // Changing the paragraph's inner HTML with the separate values
    let necessitiesContent = document.getElementById('necessitiesText');
    let wantsContent = document.getElementById('wantsText');
    let savingsContent = document.getElementById('savingsText');


    // alert ("Necessities: $" + necessities.toLocaleString() + "\nWants: $" + wants.toLocaleString() + "\nSavings: $" + savings.toLocaleString());

    necessitiesContent.innerHTML = "Necessities : $" + necessities.toLocaleString();
    wantsContent.innerHTML = "Wants: $" + wants.toLocaleString();
    savingsContent.innerHTML = "Savings: $" + savings.toLocaleString();
}

// Contact Form name function, capitalizes first letter of each name

function capitalizeName() {
    // First we get the user's input and then with that value we split it with each space there is
    const inputName = document.getElementById("name");
    const splitName = inputName.value.split(" ");

    // testing name split
    console.log(splitName);

    // iterates the split string and capitalizes the first character
    for (let i = 0; i < splitName.length; i++) {
        splitName[i] = splitName[i][0].toUpperCase() + splitName[i].substr(1);
    }

    // joins back the split string
    let capitalizedName = splitName.join(" ");

  
    console.log(capitalizedName);

    // new value is now the capitalized version of the user's names
    inputName.value = capitalizedName;

}

// submitButton.addEventListener('click', calculate);

// Facts Generator

// Array of transportation facts
const factsTransport = ["In 2019, Americans took 9.9 billion trips on public transportation.", 
"34 million times each weekday, people board public transportation.",
 "Approximately 6,800 organizations provide public transportation in the United States.",
"Every $1 billion invested in public transportation supports and creates approximately 50,000 jobs.",
"Traveling by public transportation is 10 times safer per mile than traveling by automobile.",
"A person can reduce his or her chance of being in an accident by more than 90% simply by taking public transit as opposed to commuting by car.",
"Of all riders, 71% are employed and 7% are students.",
"Communities that invest in public transit reduce the nation’s carbon emissions by 63 million metric tons annually.",
"T​he average household spends 16 cents of every dollar on transportation, and 93% of this goes to buying, maintaining, and operating cars, the largest expenditure after housing.",
"A household can save nearly $10,000 by taking public transportation and living with one less car."
];

// Generates a random number with the range based on the max parameter given
function randomGenerator(max) {
    return Math.floor(Math.random() * max);
}

// random number is equal to a random number using the random generator function and the array's size
function changeFact() {
    let randomNumber = randomGenerator(factsTransport.length);

    // inner HTML of paragraph set to different fact by accessing a specific index with randomNumber
    document.getElementById('transporationFact').innerHTML = factsTransport[randomNumber];
}

