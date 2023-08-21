import Wrapper from '../assets/wrappers/CocktailCard';

const CocktailItem = ({ cocktail }) => {
  const {
    strDrink: drink,
    strDrinkThumb: img,
    strCategory: category,
    strAlcoholic: alcoholic,
  } = cocktail;

  return (
    <Wrapper>
      <div className='img-container'>
        <img src={img} alt={drink} className='img' />
      </div>
      <div className='footer'>
        <h4>{drink}</h4>
        <h5>{category}</h5>
        <p>{alcoholic}</p>
      </div>
    </Wrapper>
  );
};
export default CocktailItem;
