import React from 'react';
import WeatherDetails from './WeatherDetails';
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

//findByText: Permite encontrar un componente por el texto que muestra en pantalla
test("WeatherDetails render", async () => {

    //Arrange
    const {findByText} = render(<WeatherDetails wind={10} humidity={80} />)

    //Al utlizar las barras utilizamos un REGEXP, una expresión regular
    //Act
    const wind = await findByText(/10/)

    const humidity = await findByText(/80/)

    //Assert
    expect(wind).toHaveTextContent("Viento:10 km/h")
    expect(humidity).toHaveTextContent("Humedad:80%")
})