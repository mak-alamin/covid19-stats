fetch("https://api.covid19api.com/countries")
  .then((res) => res.json())
  .then((data) => loadCountries(data));

function loadCountries(data) {
  let countries = data.map((country) => country.Country);
  let countrySelect = document.getElementById("countrySelect");
  countries.forEach((country) => {
    let option = document.createElement("option");
    option.innerText = country;
    countrySelect.appendChild(option);
  });
}
