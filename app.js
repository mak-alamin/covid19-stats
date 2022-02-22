// Load Countries
fetch("https://api.covid19api.com/countries")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    loadCountries(data);
  });

function loadCountries(countries) {
  let countrySelect = document.getElementById("countrySelect");

  countries.forEach((country) => {
    let option = document.createElement("option");
    option.innerText = country.Country;
    option.value = country.Slug;
    countrySelect.appendChild(option);
  });
}

// Load Cases by Country
function loadCasesByCountry(country) {
  console.log(country);
  fetch(`https://api.covid19api.com/total/country/${country}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}
