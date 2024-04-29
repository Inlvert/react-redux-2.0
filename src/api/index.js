import axios from "axios";

const httpClient = axios.create({
  baseURL: 'http://localhost:5000'
})

export const createUser = async (userData) => {
  const response = await httpClient.post('/users', userData);
  return response;
};

export const createCar = async (carData) => {
  const response = await httpClient.post('/cars', carData);
  return response;
};

export const findAllCars = async (cars) => {
  const response = await httpClient.get('/cars', cars);
  return response;
}