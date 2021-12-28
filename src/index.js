// ================== make imports ==================
import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ================== var  ==================
const DEBOUNCE_DELAY = 300;

// ================== take ref  ==================
const inputRef = document.querySelector('#search-box')
console.log(inputRef);

// ================== add listener  ==================
inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));


// ================== input change  ==================
function onInput(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim()
    console.log(inputValue);
    if (inputValue === '') {
        console.log('no symbol - clean country list');
        return
    }

}

function fetchCountries(name){
    fetch(`https://restcountries.com/v3.1/name/peru`)
        .then(response => {
        return response.json()
        
        })
        .then(country => {
            console.log(country);
        })  
        .catch(error => {
            console.log(error)
        });
};  
fetchCountries()

