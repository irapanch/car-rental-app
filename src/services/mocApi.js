import axios from 'axios';

const API_URL = 'https://6536b8babb226bb85dd28cc5.mockapi.io/adverts';

// /collection/get-список авто для створення колекції на головній сторінці.
export const fetchAPI = async () => {
  try {
    const { data } = await axios.get(API_URL);

    return data;
  } catch (error) {
    throw new Error(error);
  }
};
