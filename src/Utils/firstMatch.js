import { CITY_CODE, COUNTRY_CODE } from "../Strings";

export const firstMatchingCity = (list, city) => firstMatch(list, city, CITY_CODE);
export const firstMatchingCountry = (list, country) => firstMatch(list, country, COUNTRY_CODE);


const firstMatch = (list, matchName, matchCode) => list.find(item => (item.name.toLowerCase()).includes(matchName.toLowerCase()) 
                                                        &&  item.fcode.includes(matchCode));