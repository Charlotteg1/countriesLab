const input = document.querySelector("#new-country")
const findCountry = document.querySelector('#find-button');
const countryList = document.querySelector("#all-countries")

let countriesInfo;
let chosenCountryInfo;

const fetchCountries = async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    jsonData = await response.json();
    console.log(jsonData);
    return jsonData;
} 

const setUp = ()=>{
    fetchCountries()
        .then((jsonData) => {
        countriesInfo=jsonData;
        allCountries(countriesInfo)
        })
}

const allCountries= (countriesInfo) => {
    
    countryList.innerHTML=""; // clears, usefully when the method is being used for filtering 
    countriesInfo.forEach((country) => {

        const countryItem = document.createElement("li");
        countryItem.innerText = "Name:  "+country.name.common
        countryList.appendChild(countryItem);
        const countryName = document.createElement("ul"); // creates a sub list inside name (countryItem)
        countryItem.appendChild(countryName);

        const countryPop = document.createElement("li");
        countryPop.innerText = "Population:  " + country.population.toLocaleString("en-US"); // makes population display with commas
        countryName.appendChild(countryPop);
    });

}

findCountry.addEventListener("click", () =>{ 

    const chosenCountry= input.value.toLowerCase();
    filterByCountry(chosenCountry);

    // if statement for handling an incorrect entry
    if(chosenCountryInfo.length>0){ 
        allCountries(chosenCountryInfo)
        input.setAttribute("placeholder","Input a country!")
        input.value="";
    }else{
        allCountries(countriesInfo);
        alert("Country not found, try again")// gives a pop up to users
        input.value="";
        input.setAttribute("placeholder","not found try again")
    }
})

const filterByCountry = (chosenCountry) =>{
    // includes() also gives back any countries where the characters are also in the name i.e if "us" is sent 
    // then austria and cyprus is added etc.
    chosenCountryInfo= countriesInfo.filter((country)=> 
        country.name.common.toLowerCase().includes(chosenCountry));
}

setUp()


