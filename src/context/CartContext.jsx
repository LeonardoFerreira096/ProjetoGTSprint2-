import { createContext, useState  } from "react"


const CartContext = createContext ()

const CartProvider = ({children}) => {
    const [count, setCount] = useState(0)

    function addToCart(){
       setCount((count) => count + 1)
    }
    function removerFromCart(){
        setCount((count) => count - 1)
     }
    function removerItem(){
        setCount(0)
     }
  return (
      <>
      <CartContext.Provider value={{count, addToCart, removerFromCart, removerItem}}>
        {children}
      </CartContext.Provider>
      </>
    )   
}

export {CartContext, CartProvider}