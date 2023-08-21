import { createContext } from "react"
import { useState } from "react"
// React Context is a method to pass props from parent to child components 
// WITHOUT having to pass data through each level of the component tree via props
// This is similar to what we did in KickFlix app with the authprovider


export const CartContext = createContext({})




const CartContextProvider = ({children}) => {
    
    const [cartProducts, setCartProducts] = useState([])

    //console.log(cartProducts) // each time we click the button we can see the product ids in the array
    //each time we click the add to cart button,it accepts a product id and  it will add it to the cart products
    const addProduct = (productId) => {
        setCartProducts(prev => [...prev, productId])
    }





    // we pass in the children into the context provider, for values we want to be able to add to the cart products which is why we added them to value
    return(

        <CartContext.Provider value={{cartProducts, addProduct}}>{children}</CartContext.Provider>
    )


}

export default CartContextProvider