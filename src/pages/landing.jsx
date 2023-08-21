import axios from 'axios';
import SearchForm from '../components/SearchForm';
import { useEffect, useState } from 'react';
import CocktailList from '../components/CocktailList';

const url =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=margarita';

const Landing = () => {
  const [cocktails, setCocktails] = useState([]);

  const fetchCocktail = async () => {
    const res = await axios.get(url);
    setCocktails(res.data.drinks);
    //console.log(res.data.drinks);
  };

  useEffect(() => {
    fetchCocktail();
  }, []);

  return (
    <div>
      <SearchForm />
      <CocktailList cocktails={cocktails} />
    </div>
  );
};
export default Landing;
