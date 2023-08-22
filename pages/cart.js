// Here will be the page for when the user clicks into their cart 

import Header from "@/components/Header"
import Center from "@/components/Center"
import { styled } from "styled-components"
import PrimaryBtn from "@/components/Button"
import { useContext } from "react"
import { CartContext } from "@/components/CartContext"
import { useState, useEffect } from "react"
import axios from "axios"

// Here for the wrapper we want to make 2 columns
const ColumnsWrapper = styled.div`
  display: grid; 
  grid-template-columns: 1.1fr .9fr;
  gap: 40px;
  margin-top: 40px;

`

const Box = styled.div`
  background-color: #787878;
  border-radius: 10px;
  padding: 20px;
`

const CartPage = () => {


  const {cartProducts} = useContext(CartContext)
  // console.log(cartProducts)

  const [products, setProducts] = useState([])

  // put the cart products into a useState
  useEffect(() => {
    if (cartProducts){
      // Make a post request using axios, We will send the ids as the body
      axios.post('/api/cart', {ids:cartProducts}).then(response => {
        setProducts(response.data)
      })
    }
  }, [cartProducts])



  return (
    <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              {/* If we have no products in cart */}
              {!products && (
                <div>Your Cart is Empty </div>
              )}

              {/* if we have products in our cart */}
              {products &&(
                <>
                  <h2>Here are your items</h2>
                  {products.map(product => (
                  <div>{product.title}</div>
                ))}
                
                </>
                

              )}


            </Box>
            <Box> Box 2
              <h2>Order Information</h2>
              <PrimaryBtn green={1}>Continue to Payment</PrimaryBtn>
            </Box>
          
          </ColumnsWrapper>
        </Center>
    </>
    
  )
}

export default CartPage