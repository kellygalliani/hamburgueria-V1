import React from 'react'
import { StyledButton } from '../../styles/buttons'
import StyledLiCard from './style'

const Card = ({item, addToCart}) => {
  return (
    <StyledLiCard key={item.id}>
         <div className='div_img'>
            <img src={item.img} alt={item.name} />
         </div>
         <div className='div_content'>
            <h2>{item.name}</h2>
            <span>{item.category}</span>
            <p>R$ {Number(item.price).toFixed(2)}</p>
            <StyledButton buttonType="buy" onClick={()=> addToCart(item)} >Adicionar</StyledButton>
         </div> 
    </StyledLiCard>
        
  )
}

export default Card