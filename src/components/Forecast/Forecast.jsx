import React from 'react'
import PropTypes from 'prop-types'
import  Grid  from '@mui/material/Grid'
import ForecastItem from './../ForescastItem'
import  {validValues} from './../IconState'

const renderForescastItem = forecast => {
    const {hour, weekDay, state, temperature} = forecast
    // Hay que ponder un identificador único
    //Vamos a poner una "marca" para encontrar cada item (ForecastItem)
    return(
        <Grid 
        data-testid ="forecast-item-container"
        item key={`${weekDay}${hour}`}>
            <ForecastItem 
                hour={hour}
                weekDay={weekDay}
                state={state}
                temperature={temperature}
            ></ForecastItem>
        </Grid>
    )
}

const Forecast = ({forecastItemList}) => {
  return (
    <Grid container
        justifyContent={'space-around'}
        alignItems={'center'}>
        {
            forecastItemList.map(forecast => renderForescastItem(forecast))
        }
        
    </Grid>
  )
}

//forecastItemList esun array de elementos
//Los elementos deben tener una "forma" en particular
//las siguientes propiedades:
/*
* weekday: PropTypes.string.isRequired,
* hour: PropTypes.number.isRequired,
* state: PropTypes.oneOf(validValues).isRequired,
* temperature: PropTypes.number.isRequired,
*/
Forecast.propTypes = {
    forecastItemList: PropTypes.arrayOf(PropTypes.shape({
        weekDay: PropTypes.string.isRequired,
        hour: PropTypes.number.isRequired,
        state: PropTypes.oneOf(validValues).isRequired,
        temperature: PropTypes.number.isRequired,
    })).isRequired,
}

export default Forecast