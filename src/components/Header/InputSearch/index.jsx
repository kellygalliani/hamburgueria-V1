import React from 'react'
import styles from '../../../styles/input.module.css'
import { StyledButton } from '../../../styles/buttons.js'


const ImputSearch = ({products, filter, filteredProducts,  setFilteredProducts}) => {
  return (
    <div className={styles.inputDiv}>
      <input 
      className={styles.search} 
      placeholder='Digitar Pesquisa'
      type='text'
      value={filteredProducts}
      onChange={(e) => setFilteredProducts(e.target.value.toLocaleLowerCase())}
      ></input>
      <StyledButton type='submit' onClick={()=> filter()} buttonType="search">Pesquisar</StyledButton>
    </div>
  )
}

export default ImputSearch