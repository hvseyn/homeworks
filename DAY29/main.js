// let country = ["Azerbaycan", "Turkey", "Georgia", "Spain"];
// let countryCode = {
//     "Azerbaycan": "AZE",
//     "Turkey": "TUR",
//     "Georgia": "GEO",
//     "Spain": "SPA"
// };
// let formattedCountries = country.map((country, index) => {
//     let countryCodePrefix = (index + 1).toString().padStart(2, "0");
//     return countryCodePrefix + countryCode[country];
// });
// console.log(formattedCountries);


// let country = ["Azerbaycan", "Turkey", "Georgia", "Spain"];
// function getCountryCode(countryName) {
//     if (countryName === "Azerbaycan") {
//         return "AZE";
//     } else if (countryName === "Turkey") {
//         return "TUR";
//     } else if (countryName === "Georgia") {
//         return "GEO";
//     } else if (countryName === "Spain") {
//         return "SPA";
//     } else {
//         return "UNKNOWN";
//     }
// }
// let formattedCountries = country.map((country, index) => {
//     let countryCodePrefix = (index + 1).toString().padStart(2, "0");
//     let country_code = getCountryCode(country);
//     return countryCodePrefix + country_code;
// });
// console.log(formattedCountries);