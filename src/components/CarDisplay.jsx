import React from 'react';

const CarDisplay = ({ car }) => {
  const loaded = () => {
    return (
      <>
        <h1>{car.make}</h1>
        <h2>{car.model}</h2>
        <img src={car.image} alt={`${car.make} ${car.model}`} />
        <h2>{car.year}</h2>
      </>
    );
  };

  const loading = () => {
    return <h1>No Car to Display</h1>;
  };

  return car ? loaded() : loading();
};

export default CarDisplay;
