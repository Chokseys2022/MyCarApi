import React, { useState } from 'react';

const Form = ({ getCar }) => {
  const [formData, setFormData] = useState({ searchBrand: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getCar(formData.searchBrand);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='search'
        name='searchBrand'
        onChange={handleChange}
        placeholder='Car Brand...'
      />
      <input type='submit' value='Submit' />
    </form>
  );
};

export default Form;
