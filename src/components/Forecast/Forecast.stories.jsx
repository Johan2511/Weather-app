import React from 'react';
import Forecast from './Forecast';

export default {
  title: "Forecast",
  component: Forecast
};

const forecastItemList = [
  { hour: 8, state: 'cloud', temperature: 19, weekDay: 'Lunes' },
  { hour: 10, state: 'cloudy', temperature: 23, weekDay: 'Martes' },
  { hour: 12, state: 'fog', temperature: 17, weekDay: 'Miercoles' },
  { hour: 14, state: 'sunny', temperature: 22, weekDay: 'Jueves' },
  { hour: 18, state: 'rain', temperature: 15, weekDay: 'Viernes' },
  { hour: 15, state: 'sunny', temperature: 28, weekDay: 'Sabado' },
];

export const ForecastExample = () => (
  <Forecast forecastItemList={forecastItemList} />
  );