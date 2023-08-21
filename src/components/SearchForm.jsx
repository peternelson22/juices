import Wrapper from '../assets/wrappers/SearchForm';
import { Form } from 'react-router-dom';

const SearchForm = () => {
  return (
    <Wrapper>
      <Form className='form'>
        <input type='search' name='search' className='form-input' />
        <button type='submit' className='btn'>
          search
        </button>
      </Form>
    </Wrapper>
  );
};
export default SearchForm;
