import { Outlet, Link } from 'react-router-dom';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <section className='page'>
        <Outlet />
      </section>
    </div>
  );
};
export default Home;
