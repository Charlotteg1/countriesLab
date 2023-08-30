const fetchCountries= async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    const jsonData = await response.json();

    const countryList = document.querySelector("ul")

    // const allCharacters = jsonData.map((result) => result.data).flat()

    jsonData.forEach((country) => {
        const countryItem = document.createElement("li");
        countryItem.textContent = country.name.official;
        countryList.appendChild(countryItem);
    });
    

}

fetchCountries()
// allCountries = [];
// for( let i = 1 ; i<3 ; i++ ){
//     allCountries.push(
//         fetch(`https://restcountries.com/v3.1/all`)
//             .then((response) => response.json())
//     )

// }