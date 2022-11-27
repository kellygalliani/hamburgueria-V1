import React from 'react'
import Card from '../Card'
import StyledUlCards from './style.js'

const UlCards = ({products, setCurrentSale, addToCart}) => {
  return (
      <StyledUlCards >
        {products.map((item) => { 
          return <Card item={item} setCurrentSale={setCurrentSale} addToCart={addToCart} /> 
        })}
      </StyledUlCards>
  )
}

export default UlCards