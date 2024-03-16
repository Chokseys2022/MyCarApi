import { useState } from 'react'

import './App.css'

const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://car-data.p.rapidapi.com/cars/types',
  headers: {
    'X-RapidAPI-Key': '0e5840fce5msh64e8ae08cf2c1aep165dedjsnbefc17e7a46b',
    'X-RapidAPI-Host': 'car-data.p.rapidapi.com'
  }
};

async function fetchData() {
  try {
    const response = await axios.request(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();


