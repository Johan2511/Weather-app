import React from "react"
import { render } from "@testing-library/react"
import CityInfo from "./CityInfo" // SUT: Subject under testing (Objeto del testeo)

test('CityInfo render', async () => { 
    // AAA
    // Arrange
    // Act
    const city = "Colombia"
    const country = "Bogotá"

    // render: renderiza el componente y retorna una serie de funciones de utilidad
    // En este caso utilizamos "findAllByRole" para "Consultar" a nuestro componente
    // Vamos a analizar su estado en el "Assert" 
    const { findAllByRole } = render(<CityInfo city={city} country={country}/>)
    
    // Assert
    // FindByAllRole nos va a buscar (en este caso) todos los componentes que sean
    // "heading" => H1, H2, H3,...etc
    // El resultado es un array de componentes (cityAndCountryComponents)
    const cityAndCountryComponents = await findAllByRole("heading")

    // ¿Cuando el test va a ser coreecto?
    // Definición:
    // Cuando en el primer elemento (heading) se encuentre la ciudad "Bogotá"
    // y cuando en el segundo elemento se encuentre el pais Colombia

    expect(cityAndCountryComponents[0]).toHaveTextContent(city)
    expect(cityAndCountryComponents[1]).toHaveTextContent(country)

    // Si estas condiciones se cumplen (expect), el test estara "ok"
})