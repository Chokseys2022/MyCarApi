import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './components/Form'; // Corrected import path
import CarDisplay from './components/CarDisplay'; // Corrected import path

const App = () => {
  const [carData, setCarData] = useState(null);

  const search = async (searchBrand) => {
    try {
      if (searchBrand === '') {
        // Adjust this part according to the car API documentation for generating random car data.
        // Example: let res = await axios.get(`https://carapi.com/random`);
        // setCarData(res.data);
      } else {
        let res = await axios.get(
          `https://carapi.com/brands/${searchBrand}`
        );
        setCarData(res.data);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    search('');
  }, []);

  return (
    <>
      <h1>My Car App</h1>
      <Form getCar={search} />
      <CarDisplay car={carData} />
    </>
  );
};

export default App;
