const BASE_URL = 'http://api.geonames.org/';
const SEARCH_JSON = 'searchJSON';
const USERNAME = 'weknowit';

export const getCity = city => getByName(city);

export const getCountry = country => getByName(country);

export const getCities = countryCode => getByCountryCode(countryCode);

const getByName = name =>
  fetch(`${BASE_URL}${SEARCH_JSON}?name=${name}&username=${USERNAME}`)
  .then(response => response.json())
  .then(obj => obj.geonames)

const getByCountryCode = countryCode =>
  fetch(`${BASE_URL}${SEARCH_JSON}?country=${countryCode}&username=${USERNAME}`)
  .then(response => response.json())
  .then(obj => obj.geonames);