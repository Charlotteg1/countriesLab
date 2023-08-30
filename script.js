




const setUp = async ()=>{
    fetchCountries()
}

const fetchCountries= async () => {
    const response = await fetch("https://restcountries.com/v3.1/all")
    let jsonData = await response.json();
    console.log(jsonData);

    const countryList = document.querySelector("ul")

    jsonData.forEach((country) => {
        const countryItem = document.createElement("li");
        countryItem.textContent = "Name:  "+country.name.common 
        // +"\n"+ " Population:" + country.population;
        countryList.appendChild(countryItem);
        const countryName = document.createElement("ul");
        const countryPop = document.createElement("li");
        countryPop.textContent = "Population:  " + country.population.toLocaleString("en-US");
        countryItem.appendChild(countryName);
        countryName.appendChild(countryPop);
    });
    

}


setUp()

