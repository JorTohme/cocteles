import axios from 'axios';

export const fetchCocteles = async () => {
  const response = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php');
  return response.data;
}

export const searchCoctelbyName = async (searchParam: string) => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchParam}`);
  return response.data;
}
  
export const searchCoctelbyIngredient = async (searchParam: string) => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchParam}`);
  return response.data;
}

export const searchCoctelbyCategory = async (searchParam: string) => {
  const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchParam}`);
  return response.data;
}
