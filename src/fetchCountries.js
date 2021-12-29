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
                            const countryName = country.name.official;
                            const flagLink = country.flags.png;
                                
                    countryInfoRef.innerHTML += htmlMarkupCountry(flagLink, countryName) ;
                    })
                        )
                        
                    } else {
                        countries.map((country => {
                            const countryName = country.name.official;
                            const capital = country.capital;
                            const population = country.population;
                            const flagLink = country.flags.png;
                            const languages = Object.values(country.languages);
                            
            countryListRef.innerHTML = htmlMarkupCountries(flagLink, countryName, capital, population, languages );
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



function htmlMarkupCountries(flagLink, countryName, capital, population, languages ) {
    return `
<img class="flag" src="${flagLink}" alt="">
<p class="name">${countryName}</p>
<p class="capital">${capital}</p>
<p class="population">${population}</p>
<p class="languages">${languages}</p>
`;
}

function htmlMarkupCountry(flagLink, countryName) {
    return `
<li class="country-item">
<img class="country-flag" src="${flagLink}" alt="">
<p class="country-name">${countryName}</p>
</li>
`;
}

//{ flagLink, countryName, capital, population, languages }

// const searchParams = 'name,capital,population,flags,languages';
// `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`


// https://restcountries.com/v2/all?fields=${name},{capital},{population},{flags.svg},{languages}

