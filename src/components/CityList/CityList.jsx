import React from 'react'
import PropTypes from 'prop-types'
import  Grid  from '@mui/material/Grid'
import  List  from '@mui/material/List'
import  ListItemButton  from '@mui/material/ListItemButton'  
import CityInfo from '../CityInfo'
import Weather from '../Weather'


// li es un item (según tag html), tiene el role "listitem"
// renderCityAndCount se va a convertir en una función que retorna otra función
const renderCityAndCountry = eventOnClickCity =>cityAndCountry => {
    const { city, country} = cityAndCountry

    return (
        <ListItemButton
            key={city}
            onClick={eventOnClickCity}>
            <Grid container
                justifyContent={'center'}
                alignItems={'center'}
            >
                <Grid item
                    md={9}
                    xs={12}>
                        <CityInfo city={city} country={country} />
                </Grid>
                <Grid item
                    md={3}
                    xs={12}>
                        <Weather temperature={10} state='sunny'/>
                </Grid>
            </Grid>
        </ListItemButton>
    )
}

// cities: es un array, y en cada item tiene que tener la ciudad, pero además el country
//ul: tag html para listas no ordenadas
const CityList = ({cities, onClickCity}) => {
  return (
        <List>
            {
                cities.map(cityAndCountry => renderCityAndCountry(onClickCity)(cityAndCountry))
            }
        </List>
  )
}

CityList.propTypes = {
    cities: PropTypes.arrayOf( PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired
    })).isRequired,
    onClickCity: PropTypes.func.isRequired
}

export default CityList