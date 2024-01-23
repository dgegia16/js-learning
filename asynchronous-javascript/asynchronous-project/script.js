'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

const renderCountry = function (data, className = '') {
  if (data.length > 1) {
    data.forEach(countryData => {
      const html = `
          <article class="country ${className}">
            <img class="country__img" src="${countryData.flags.png}" />
            <div class="country__data">
              <h3 class="country__name">${countryData.name.common}</h3>
              <h4 class="country__region">${countryData.region}</h4>
              <p class="country__row"><span>👫</span>${
                Math.floor((countryData.population / 1000000) * 100) / 100 + 'M'
              } people</p>
              <p class="country__row"><span>🗣️</span>LANG: ${
                Object.values(countryData.languages)[0]
              }</p>
            <p class="country__row"><span>🏰</span>${countryData.capital}</p>
            </div>
          </article>
        `;
      countriesContainer.insertAdjacentHTML('beforeend', html);
    });

    countriesContainer.style.opacity = 1;
  } else if (data.length === 1) {
    const countryData = data[0];
    console.log(countryData);
    const html = `
        <article class="country ${className}">
          <img class="country__img" src="${countryData.flags.png}" />
          <div class="country__data">
            <h3 class="country__name">${countryData.name.common}</h3>
            <h4 class="country__region">${countryData.region}</h4>
            <p class="country__row"><span>👫</span>${
              Math.floor((countryData.population / 1000000) * 100) / 100 + 'M'
            } people</p>
            <p class="country__row"><span>🗣️</span>LANG: ${
              Object.values(countryData.languages)[0]
            }</p>
            <p class="country__row"><span>🏰</span>${countryData.capital}</p>
          </div>
        </article>
      `;
    countriesContainer.insertAdjacentHTML('beforeend', html);

    // countriesContainer.style.opacity = 1;
  }
};

const renderError = function (msg) {
  countriesContainer.insertAdjacentText('beforeend', msg);
  // countriesContainer.style.opacity = 1;
};

///////////////////////////////////////

// WITH REQUEST

// const getCountry = function (country) {
//   const request = new XMLHttpRequest();
//   request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//   request.send();

//   request.addEventListener('load', function () {
//     const data = JSON.parse(this.responseText);
//     renderCountry(data);
//   });
// };

// WITH FETCH AND PROMISES

const getCountryData = function (country) {
  fetch(`https://restcountries.com/v3.1/name/${country}`)
    .then(response => response.json())
    .then(data => {
      renderCountry(data);
      // ADDING NEIGHBOUR

      const borders = data[0]?.borders;
      const neighbour = borders[0];
      if (!neighbour) return;

      return fetch(`https://restcountries.com/v3.1/alpha/${neighbour}`);
    })
    .then(response => response.json())
    .then(data2 => renderCountry(data2, 'neighbour'))
    .catch(err => {
      renderError(`Something went wrong :@@@@ ${err}`);
    })
    .finally(() => {
      countriesContainer.style.opacity = 1;
    });
};

btn.addEventListener('click', function () {
  getCountryData('france');
});

// FOR FETCH METHOD
// getCountry('georgia')
