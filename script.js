const input = document.querySelector("#new-country")
const chosenCountryList = document.querySelector("#country-info");
const findCountry = document.querySelector('#find-country');
const findButton = document.querySelector("#find")

let countriesInfo;
let chosenCountryInfo;
let found;

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
    enterButton();
}

const allCountries= (countriesInfo) => {
    const countryList = document.querySelector("#all-countries")
    countryList.innerHTML="";
    countriesInfo.forEach((country) => {
        const countryItem = document.createElement("li");
        countryItem.innerText = "Name:  "+country.name.common
        countryList.appendChild(countryItem);
        const countryName = document.createElement("ul");
        const countryPop = document.createElement("li");
        countryPop.innerText = "Population:  " + country.population.toLocaleString("en-US");
        countryItem.appendChild(countryName);
        countryName.appendChild(countryPop);
    });

}

const enterButton=()=> {
    findCountry.addEventListener('click', () =>{
        const chosenCountry= input.value.toLowerCase();
        filterByCountry(chosenCountry);
        if(chosenCountryInfo.length>0){
            
        allCountries(chosenCountryInfo)
        input.setAttribute("placeholder","Input a country!")
        }else{
            input.value=""
            input.setAttribute("placeholder","not found try again")
        }

    })
}

const filterByCountry = (chosenCountry) =>{
    chosenCountryInfo= countriesInfo.filter((country)=> country.name.common.toLowerCase().includes(chosenCountry));
    
}


setUp()


