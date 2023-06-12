import React from 'react';
import { render, fireEvent } from "@testing-library/react"
import CityList from './CityList';

const cities = [
    {city: "Bogotá", country:"Colombia"},
    {city: "Buenos Aires", country:"Argentina"},
    {city: "Madrid", country:"España"},
    {city: "Ciudad de México", country:"México"},
]

test('CityList render', async () => {
    

    const {findAllByRole } = render (<CityList cities={cities}/> )

    const items = await findAllByRole ("button")


    expect(items).toHaveLength(4)

})

test('CityList click on item', async () => {
     //Debemos simular una acción del usuario: click sobre un item
     //Para eso vamos a utlizar una función "mock"
    const fnClickOnItem = jest.fn()

    const  {findAllByRole}  = render(<CityList cities={cities} onClickCity={fnClickOnItem} />)

    const items = await findAllByRole("button")

    // Ahora para simular la acción, vamos a utlizar fireEvent
    // FireEvent es parte de la libreria testing-library/react

    fireEvent.click(items[0])

    //¿Ahora que tuvo que suceder?
    // Se debió llamar a la función fnClickItem UNA única vez

    expect(fnClickOnItem).toHaveBeenCalledTimes(1)
})