const countriesElem = document.querySelector(".countries");
const toggleButton = document.querySelector("button");
const searchInput = document.getElementById("searchInput");

toggleButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
});

fetch("https://restcountries.com/v3.1/all")
    .then(res => res.json())
    .then(data => {
        const countries = data;

        displayCountries(countries);

        searchInput.addEventListener("input", function () {
            const searchTerm = searchInput.value.toLowerCase();
            const filteredCountries = countries.filter(country => 
                country.name.common.toLowerCase().includes(searchTerm)
            );

            displayCountries(filteredCountries);
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });

function displayCountries(countries) {
    countriesElem.innerHTML = "";

    countries.forEach(element => {
        countriesElem.innerHTML += `
            <div class="country">
                <img src="${element.flags.png}" alt="${element.name.common}">
                <h4>${element.name.common}</h4>
                <div>
                    <p>Population: ${element.population}</p>
                    <p>Region: ${element.region}</p>
                    <p>Capital: ${element.capital}</p>
                </div>
            </div>`;
    });
}

