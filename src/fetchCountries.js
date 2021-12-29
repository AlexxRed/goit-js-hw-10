import { countryListRef } from './index.js';
import { countryInfoRef } from './index.js'
import { Notify } from 'notiflix/build/notiflix-notify-aio';


export function fetchCountries(name) {
    const responseFields = 'name,capital,population,flags,languages';
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=${responseFields}`)
        .then(response => {
            return response.json();
        
        })
        .then(
            countries => {
                console.log(countries);
                if (countries.length < 10) {
                    if (countries.length >= 2) {
                        countries.map(
                            (country => {
                                const contryName = country.name.official;
                                const flagLink = country.flags.png;
                        // console.log(contryName);
                        // console.log(flagLink);

                                const htmlMarkupCountry = `
                                <li class="country-item">
                                <img class="country-flag" src="${flagLink}" alt="">
                                <p class="country-name">${contryName}</p>
                                </li>
                                `;
                                
                        countryInfoRef.innerHTML += htmlMarkupCountry ;
                    })
                        )
                        
                    } else {
                        countries.map((country => {
                            const contryName = country.name.official;
                            const capital = country.capital;
                            const population = country.population;
                            const flagLink = country.flags.png;
                            const languages = Object.values(country.languages);
                        // console.log(contryName);
                        // console.log(capital);
                        // console.log(population);
                        // console.log(flagLink);
                        // console.log(languages);

                            const htmlMarkupCountries = `
                        <img class="flag" src="${flagLink}" alt="">
                        <p class="name"><b>Country:</b> ${contryName}</p>
                        <p class="capital"><b>Capital:</b> ${capital}</p>
                        <p class="population"><b>Population:</b> ${population}</p>
                        <p class="languages"><b>Languages:</b> ${languages}</p>`;
                            
                        countryListRef.innerHTML = htmlMarkupCountries;
            }))
                    }
                    
                } else {
                    if (countries.message ==='Not Found') {
                        Notify.failure("Oops, there is no country with that name");
                    } else {
                        Notify.info("Too many matches found. Please enter a more specific name." );
                    console.log("Too many matches found. Please enter a more specific name.");
                    };
                };
            // console.log(countries);

            
        })  
        .catch(error => {
            console.log(error);
            Notify.failure("Oops, there is no country with that name");
            console.log("Oops, there is no country with that name");
        });
};  



// function htmlMarkupCountries({ flagLink, contryName, capital, population, languages }) {
//     `
// <img class="flag" src="${flagLink}" alt="">
// <p class="name">${contryName}</p>
// <p class="capital">${capital}</p>
// <p class="population">${population}</p>
// <p class="languages">${languages}</p>
// `;
// }



// const searchParams = 'name,capital,population,flags,languages';
// `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`


// https://restcountries.com/v2/all?fields=${name},{capital},{population},{flags.svg},{languages}

