const inputs = document.querySelectorAll('input');
let names = document.querySelector('.name');
const nameInput = document.querySelector('.name-input')
const cardNumber = document.querySelector('.card-number');
const cardInput = document.querySelector('.card-input')
const month = document.querySelector('.month');
const monthText = document.querySelector('.month-text');
const year = document.querySelector('.year')
const yearText = document.querySelector('.year-text');
const cvv = document.querySelector('.shorter');
const cvvText = document.querySelector('.cvv-text')
const submit = document.querySelector('.submit');
const form = document.querySelector('.form');
const confirms = document.querySelector('.confirm');



submit.addEventListener('click', ()=>{

    let allValid = true;

    if(names.value === ''){
        displayError(names);
        allValid = false;
    }else{
        nameInput.innerHTML = names.value;
    }


    if(cardNumber.value !== '' && cardNumber.value.length >= 16){
        addSpace();
    }else{
        displayError(cardNumber);
        allValid = false;
    }


    if(month.value !== '' && month.value <= 12){
        monthText.innerHTML = month.value
    }else{
        month.style.borderColor = 'red';
        allValid = false;
    }


    if(year.value !== '' && year.value.length <= 2){
        yearText.innerHTML = year.value
    }else{
        year.style.borderColor = 'red';
        allValid = false
    }


    if(cvv.value !== '' && cvv.value.length <= 3){
        cvvText.innerHTML = cvv.value;

    }else{
        cvv.style.borderColor = 'red';
        allValid = false;
    }

    if(allValid){
        form.style.display = 'none';
        confirms.style.display = 'block'
    }

    year.value = '';
    cvv.value = '';
    month.value = '';
    names.value = '';
    cardNumber.value = '';

})


// function to add space in the middle of the card input 

function addSpace() {
    let cardResult = '';
    for (let i = 0; i < cardNumber.value.length; i++) { 
        if (i % 4 === 0 && i > 0) {
            cardResult += ' ';
        }
        cardResult += cardNumber.value[i];
    }
    cardInput.textContent = cardResult; 
    cardInput.className = 'cardInput';
    
}


function displayError(values){
    values.style.borderColor = 'red'
    values.placeholder = 'field cant be empty';
    values.classList.add('error')
}



















// let number = [123456789];

// let str = '';
// let numberStr = number[0].toString(); // Convert the number to a string

// for (let i = 0; i < numberStr.length; i++) {
//     if (i % 4 === 0 && i > 0) {
//         str += ' ';
//         console.log(str)
//     }
//     str += numberStr[i];
// }

// // console.log(str); // Output: "1234 5678 9"




