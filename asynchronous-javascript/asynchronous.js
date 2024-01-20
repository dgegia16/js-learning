// const request = fetch(`https://restcountries.com/v3.1/name/georgia`);
// console.log(request);

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then((response) => response.json())
    .then((data) => renderCountry(data));
};
