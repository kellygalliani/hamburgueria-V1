import { StyledCard_cart } from './Card_cart/style'
import StyledAside from './style'
import { StyledButton } from '../../styles/buttons.js'

const Aside = ({currentSale, setCurrentSale, removeToCart, cartTotal,setCartTotal}) => {

  function cart_Total(){
    if(currentSale.length > 0){
       const total =  currentSale.reduce((acc, presentValue) =>{
        return presentValue.price + acc
       }, 0)
       setCartTotal(total)
    }
  }
  cart_Total()

  return (
    <StyledAside>
        <div className='aside__header'>
            <h2>Carrinho de Compras</h2>
        </div>
      { currentSale.length === 0 ? 
          ( <div className='aside__emptyCart'>
                <h3>Sua sacola está vazia</h3>
                <span className='emptyCart__span'>Adicione itens</span>
            </div> )
          :
          ( 
            <>
              <ul className='aside__ul'>
                  {currentSale.map((item)=>
                    <StyledCard_cart key={item.id}>
                      <div className='li__divImg'>
                        <img src={item.img} alt={item.name} />
                      </div>
                      <div className='li__divContent'>
                        <div className='divContent__1'>
                          <h3>{item.name}</h3>
                          <p>{item.category}</p>
                        </div>
                        <span onClick={()=> removeToCart(item.id)}>Remover
                        </span>
                      </div>
                    </StyledCard_cart>
                  )}
              </ul>
              <div className='aside__divTotal'>
                    <div className='divTotal_divContent'>
                      <h4>Total</h4>
                      <p>R$ {cartTotal.toFixed(2)}</p>
                    </div>
                    <StyledButton type='button'
                    onClick={() => setCurrentSale([])}
                    buttonType='cart_remove'>Remover Todos</StyledButton>
              </div>
            </> )  
        }
        

    </StyledAside>
  )
}

export default Aside