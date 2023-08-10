let submitButton = document.getElementById('submit');



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

submitButton.addEventListener('click', calculate);

// Contact Form

let i = 0;
let images = [];
let slideShowSec = 3000;

images[0] = 'Images/connect-student-success.jpg';
images[1] = 'Images/studentjourney.webp';
images[2] = 'Images/connect-student-success.jpg';

function pictureSlide() {
    document.getElementById("missionStatement").style.backgroundImage = "url(" + images[i] + ")";


    if (i < images.length -1) {
        i++
    } else {
        i = 0;
    }
    setTimeout(pictureSlide, slideShowSec);
}


window.onload = pictureSlide;