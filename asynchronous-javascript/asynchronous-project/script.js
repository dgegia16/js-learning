'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////

const renderCountry = function (data) {
  if (data.length > 1) {
    data.forEach(countryData => {
      const html = `
          <article class="country">
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
        <article class="country">
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

    countriesContainer.style.opacity = 1;
  }
};

const getCountry = function (country) {
  const request = new XMLHttpRequest();
  request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
  request.send();

  request.addEventListener('load', function () {
    const data = JSON.parse(this.responseText);
    renderCountry(data);
  });
};

getCountry('usa');
