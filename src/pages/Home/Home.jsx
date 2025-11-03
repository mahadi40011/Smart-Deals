import React from 'react';
import Banner from '../../components/Banner/Banner';
import { useLoaderData } from 'react-router';

const Home = () => {
  const data = useLoaderData()
  console.log(data)
  return (
    <div>
      <Banner />

      <div>
        <h2 className='font-bold text-5xl text-center mt-20 mb-10'>
          Recent <span className='custom-linear-text'>Products</span>
        </h2>
      </div>
    </div>
  );
};

export default Home;