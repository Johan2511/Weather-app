import React from 'react'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'
import  Paper  from '@mui/material/Paper'
import AppFrame from '../components/AppFrame/AppFrame'
import CityList from './../components/CityList'

const cities = [
  {city: "Bogotá", country:"Colombia"},
  {city: "Buenos Aires", country:"Argentina"},
  {city: "Madrid", country:"España"},
  {city: "Ciudad de México", country:"México"},
]

const MainPage = () => {
  const navigate = useNavigate()

  const onClickHandler = () => {
      navigate("/city")
  }

  return (
    <AppFrame>
      <Paper elevation={2}>
      <CityList cities={cities}
        onClickCity={onClickHandler}/>
      </Paper>
    </AppFrame>
  )
}

MainPage.propTypes = {}

export default MainPage