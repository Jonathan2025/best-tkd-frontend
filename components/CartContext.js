import { createContext } from "react"
import { useState, useEffect } from "react"

// React Context is a method to pass props from parent to child components 
// WITHOUT having to pass data through each level of the component tree via props
// This is similar to what we did in KickFlix app with the authprovider


export const CartContext = createContext({})




const CartContextProvider = ({children}) => {
    

    // here we use a ternary operator, if the window is not undefined then return the localstorage otherwise return null
    const ls = typeof window !== "undefined" ? window.localStorage : null

    // Parse the localstorage to get the cart items OR if theres nothing then return an empty array
    const [cartProducts, setCartProducts] = useState([])

    //console.log(cartProducts) // each time we click the button we can see the product ids in the array
    //each time we click the add to cart button,it accepts a product id and  it will add it to the cart products
    const addProduct = (productId) => {
        setCartProducts(prev => [...prev, productId])
    }

    // decrease prodict
    const decreaseProduct = (productId) => {
        const productIndex = cartProducts.indexOf(productId)

        // If the product is in the cart, decrease its quantity
        if (productIndex !== -1) {
            // Create a copy of the cart products array and then using splice we can remove one instance of the product
            const updatedCart = [...cartProducts]
            updatedCart.splice(productIndex, 1)
            setCartProducts(updatedCart) // Update the cart state
        }
    }




    // Clear cart function and then add it to the cartContext provider below 
    const clearCart = () => {
        setCartProducts([])
    }


    // The first useEffect will add the items from localstorage to the cart products
    useEffect(() => {
        if(cartProducts){
            ls?.setItem('cart', JSON.stringify(cartProducts))
        }

    }, [cartProducts])


    useEffect (() => {
        if(ls && ls.getItem('cart')){
            setCartProducts(JSON.parse(ls.getItem('cart')))
        }
    }, [])

    // we pass in the children into the context provider, for values we want to be able to add to the cart products which is why we added them to value
    return(

        <CartContext.Provider value={{cartProducts, addProduct, decreaseProduct, clearCart}}>{children}</CartContext.Provider>
    )


}

export default CartContextProvider