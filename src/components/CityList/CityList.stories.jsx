import React from 'react';
import CityList from './CityList';
import {action} from '@storybook/addon-actions'


export default {
    title: "CityList",
    component: CityList
}

const cities = [
    {city: "Bogotá", country:"Colombia"},
    {city: "Buenos Aires", country:"Argentina"},
    {city: "Madrid", country:"España"},
    {city: "Ciudad de México", country:"México"},
]

export const cityListExample = () => <CityList cities={cities} onClickCity={action("Click en city")} />