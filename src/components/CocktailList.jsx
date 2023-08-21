import Wrapper from '../assets/wrappers/CocktailList';
import CocktailItem from './CocktailItem';

const CocktailList = ({ cocktails }) => {
  return (
    <Wrapper>
      {cocktails.map((cocktail) => {
        return <CocktailItem key={cocktail.idDrink} cocktail={cocktail} />;
      })}
    </Wrapper>
  );
};
export default CocktailList;
