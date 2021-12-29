import {countryListRef} from './index.js'

export function fetchCountries(name) {
    const responseFields = 'name,capital,population,flags,languages';
    fetch(`https://restcountries.com/v3.1/name/${name}?fields=${responseFields}`)
        .then(response => {
        return response.json()
        
        })
        .then(
            countries => {
                if (countries.length < 10) {
                    if (countries.length >= 2) {
                        countries.map(
                            (country => {
                        const contryName = country.name.official
                        const flagLink = country.flags.png
                        console.log(contryName);
                        console.log(flagLink);
                        const htmlMarkup = `
                                <li class="country-item">
                                <img class="country-flag" src="${flagLink}" alt="">
                                <p class="country-name">${contryName}</p>
                                </li>
                                `
                        countryListRef.innerHTML += htmlMarkup;
                        // countryListRef.insertAdjacentHTML("afterbegin", htmlMarkup)
                    })
                        )
                        
                    } else {
                        countries.map((country => {
                        const contryName = country.name.official
                        const capital = country.capital
                        const population = country.population
                        const flagLink = country.flags.png
                        const languages = Object.values(country.languages)
                        console.log(contryName);
                        console.log(capital);
                        console.log(population);
                        console.log(flagLink);
                            console.log(languages);
                            const htmlMarkup = `
                        <img class="flag" src="${flagLink}" alt="">
                        <p class="name">${contryName}</p>
                        <p class="capital">${capital}</p>
                        <p class="population">${population}</p>
                        <p class="languages">${languages}</p>`
                        countryListRef.innerHTML = htmlMarkup;
            }))
                    }
                    
                } else {
                    console.log("Too many matches found. Please enter a more specific name." );
                }
            console.log(countries);

            
        })  
        .catch(error => {
            console.log(error)
            alert("Oops, there is no country with that name")
        });
};  








// const searchParams = 'name,capital,population,flags,languages';
// `https://restcountries.com/v3.1/name/${name}?fields=${searchParams}`


// https://restcountries.com/v2/all?fields=${name},{capital},{population},{flags.svg},{languages}

