import React from 'react';
import { render, waitFor } from '@testing-library/react';
import ForecastItem from './ForecastItem';

describe('ForecastItem', () => {
  test('renders correctly', async () => {
    const weekDay = 'Lunes';
    const hour = 12;
    const state = 'cloudy';
    const temperature = 25;

    const { getByText } = render(
      <ForecastItem weekDay={weekDay} hour={hour} state={state} temperature={temperature} />
    );

    await waitFor(() => {
      expect(getByText(weekDay)).toBeInTheDocument();
      expect(getByText(hour.toString())).toBeInTheDocument();
      expect(getByText(temperature.toString() + ' °')).toBeInTheDocument();
    });
  });
});