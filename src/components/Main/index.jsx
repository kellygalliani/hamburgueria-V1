import React from 'react'
import UlCards from '../Cards_ul'
import { StyledMain } from './style'


const Main = ({products, setCurrentSale, addToCart}) => {
  return (
    <StyledMain>
       <UlCards
          products={products}
          setCurrentSale={setCurrentSale}
          addToCart={addToCart}
        />
    </StyledMain>
  )
}

export default Main