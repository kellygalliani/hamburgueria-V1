import React from 'react'
import Logo from '../../images/Logo.svg'
import InputSearch from './InputSearch'
import styles from './Header.module.css'

const Header = ({setProducts, products, filter, filteredProducts, setFilteredProducts}) => {
  return (
    <header className='container'>
        <div className={styles.headerDiv}>
            <img src={Logo} alt='Logo' className={styles.logo} />
            <InputSearch
              products={products}
              filter={filter}
              filteredProducts={filteredProducts}
              setFilteredProducts={setFilteredProducts}
            />
        </div>
    </header>
  )
}

export default Header