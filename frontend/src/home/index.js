import './index.css';
import DefaultLayout from '../layout/DefaultLayout';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <DefaultLayout>
    <div className="home">
      <div className="home-display">
        <img src={`${process.env.PUBLIC_URL}/duck.gif`} alt="duck1" className="duckfloat1" />
        <img src={`${process.env.PUBLIC_URL}/duck.gif`} alt="duck2" className="duckfloat2" />
      </div>
      <div className="homeinfo">
            <p className="kohubname">KOHUB</p>
            <p className="kohubinfo">
                The application that provide many co-working space 
                with collects good deals and seat reservations 
                in co-working spaces throughout Thailand.</p>
            <div className="interaction">
              <Link to="/search">
                <button className="findspace">FIND YOUR SPACE</button>
              </Link>
              <Link to="/moreinfo">
                <button className="moreinfo">MORE INFORMATION</button>
              </Link>
            </div>
      </div>
   </div>
   </DefaultLayout>
  );
}

export default Home;

