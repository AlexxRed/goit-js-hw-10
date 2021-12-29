// ================== make imports ==================
import { fetchCountries } from './fetchCountries.js'
import './css/styles.css';
import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

// ================== var  ==================
const DEBOUNCE_DELAY = 300;

// ================== take ref  ==================
const inputRef = document.querySelector('#search-box')
export const countryListRef = document.querySelector('.country-list')
export const countryInfoRef = document.querySelector('.country-info')
// console.log(inputRef);

// ================== add listener  ==================
inputRef.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));


// ================== input change  ==================
function onInput(e) {
    e.preventDefault();
    const inputValue = e.target.value.trim()
    console.log(inputValue);
    if (inputValue === '') {
        console.log('no symbol - clear country list');
        return
    } else {
        countryListRef.innerHTML = ''
        fetchCountries(inputValue);
    }

}

// fetchCountries('peru')



