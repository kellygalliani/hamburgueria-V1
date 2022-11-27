import { useEffect, useState } from 'react';
import Aside from './components/Cart';
import Header from './components/Header';
import Main from './components/Main';
import { api } from './services/api';
import { GlobalStyle } from './styles/global';


function App() {

 const [products, setProducts] = useState([]);
 const [filteredProducts, setFilteredProducts] = useState([]);
 const [currentSale, setCurrentSale] = useState([])
 const [cartTotal, setCartTotal] = useState(0)

 console.log(cartTotal)
  function filter(){
    const filteredList = products.filter((product)=> (product.name.toLowerCase().includes(filteredProducts)))
    setProducts(filteredList)
  }

  function addToCart(item){
    if(!currentSale.includes(item)){
      setCurrentSale([...currentSale, item])
    }
    
  }

  function removeToCart(itemId){
    const newList = currentSale.filter((itemSale) => itemSale.id !== itemId)
    setCurrentSale(newList)
  }
  
  useEffect(()=>{
    async function getHamburguer(){
      try {
        const response = await api.get()
        
        setProducts(response.data)

      } catch (error) {
        console.log(error)
      }
    }
    getHamburguer()
    
  }, [])

  return (
    <>
      <GlobalStyle/>
      <div className='header'>
        <Header
          setProducts={setProducts}
          products={products}
          filter={filter}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
      <div className='container divContent'>
        <Main
          products={products}
          setCurrentSale={setCurrentSale}
          addToCart={addToCart}
        /> 
        <Aside
          currentSale={currentSale}
          setCurrentSale={setCurrentSale}
          removeToCart={removeToCart}
          cartTotal={cartTotal}
          setCartTotal={setCartTotal}
        />
      </div>
    
    </>
  );
}

export default App;
