import { createContext } from "react"
import { useState } from "react"
// React Context is a method to pass props from parent to child components 
// WITHOUT having to pass data through each level of the component tree via props
// This is similar to what we did in KickFlix app with the authprovider


export const CartContext = createContext({})




const CartContextProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([])
    // we pass in the children into the context provider, for values we want to be able to add to the cart products which is why we added them to value
    return(

        <CartContext.Provider value={{cartProducts, setCartProducts}}>{children}</CartContext.Provider>
    )


}

export default CartContextProvider