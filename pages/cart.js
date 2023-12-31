// Here will be the page for when the user clicks into their cart 

import Header from "@/components/Header"
import Center from "@/components/Center"
import { styled } from "styled-components"
import PrimaryBtn from "@/components/Button"
import { useContext } from "react"
import { CartContext } from "@/components/CartContext"
import { useState, useEffect } from "react"
import axios from "axios"
import Table from "@/components/Table"
import Input from "@/components/Input"


// Here for the wrapper we want to make 2 columns
const ColumnsWrapper = styled.div`
  display: grid; 
  grid-template-columns: 1.3fr .7fr;
  gap: 40px;
  margin-top: 40px;

`

const Box = styled.div`
  background-color: #787878;
  border-radius: 10px;
  padding: 20px;
  color:white;
`

// to contain the image and title
const ProductInfoCell = styled.td`
  padding: 10px 0;
  
`

const ProductImageBox = styled.div`
  width: 90px;
  height: 90px;
  padding: 10px;
  background-color: #E8E8E8;
  display:flex;
  align-items:center;
  justify-content: center;


  border-radius: 10px;
  img{
    width: 100px;
    height: 100px;
    border-radius: 10px;

  }
`

const QuantityLabel = styled.span`
  padding: 0 18px;

`
const CityComponent = styled.div`
  display: flex; 
  gap: 5px;

`





const CartPage = () => {

  // From the cartContext we are able to get the cartProducts and functions like clearCart
  const {cartProducts, addProduct, decreaseProduct, clearCart} = useContext(CartContext)
  // console.log(cartProducts)

  const [products, setProducts] = useState([])

  // Create useStates for the input fields 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [city, setCity] = useState('')
  const [zip, setZip] = useState('')
  const [state, setState] = useState('')
  const [address, setAddress] = useState('')
  const [country, setCountry] = useState('')


  // We have the error with window being undefined so we can utilize a useState 
  const [isSuccess, setIsSuccess] = useState(false)



  // put the cart products into a useEffect
  useEffect(() => {
    // Fixed error - its better to use cartProducts.length > 0 because it will also make sure that cartProducts contain at least one element
    if (cartProducts.length > 0){
      // Make a post request using axios, We will send the ids as the body
      axios.post('/api/cart', {ids:cartProducts}).then(response => {
        setProducts(response.data)
      })
    }
  }, [cartProducts])

  // If we have an order success, then we want to clear the cart IF we have window 
  useEffect(()=> {
    // Otherwise if the window is underfined then just exit out the useEffect
    if (typeof window === 'undefined') {
      return
    }
    if (window?.location.href.includes('success')){
      setIsSuccess(true)
      clearCart()
    }
    
    
  }, [])






  // This is the function handler for when we increase the quantity, taking in the product.id as a parameter
  const increaseQuantity = (id) => {
    addProduct(id) // we get the add product from our use context above
  }

  const decreaseQuantity = (id) => {
    decreaseProduct(id) // we get the add product from our use context above
  }


  // Pretty much instead of having a form we created a createPayment function 
  const createPayment = async() => {
    // we send a post request the checkout api, all of the information from the form below 
    const response = await axios.post('/api/checkout', {
      name, email, city, state, zip, address, country, cartProducts
    })

    // if inside response.data we have a url, which again is the URL given by stripe for payment, then we want to go to it 
    if (response.data.url){
      // since the stripe url is OUTSIDE of our application, we can use window.location to bring us to stripe for payment
      window.location = response.data.url
    }
  }


  // Now for each of the product we need to get the total cost 
  let total = 0 
  for (const productId of cartProducts){
    const price = products.find(product => product._id === productId)?.price || 0 
    total += price
  }


  // If the payment was successful, then we will let the user know
  if (isSuccess){
    return(
      <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box> 
              <h1>Thank you for your Payment. Your order is now being processed :)</h1>
            </Box>
          </ColumnsWrapper>
        </Center>
      </>
    )
  }



  return (
    <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box>
              <h2>Cart</h2>
              {/* If we have no products in cart */}
              {!cartProducts?.length && (
                <div>Your Cart is Empty </div>
              )}

                {products.length > 0 &&(
           
                  <Table>
                    <thead>
                      <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th>Price</th>
                      </tr>
                    </thead>


                    <tbody>
                    {/* if we have products in our cart */}
                    
                      <>
                        
                        {products.map(product => (
                          <tr>
                            <ProductInfoCell>
                              <ProductImageBox>
                                <img src={product.images[0]} />
                              </ProductImageBox>
                             
                              {product.title}
                              </ProductInfoCell>
                            <td>
                              {/* Here we want to filter for the specific product and the respective quantity */}
                              
                              
                              <PrimaryBtn green={1} onClick={() => increaseQuantity(product._id)}>+</PrimaryBtn>
                             <QuantityLabel>
                             {cartProducts.filter(id => id === product._id).length}
                             </QuantityLabel>

                             
                              <PrimaryBtn green={1} onClick={() => decreaseQuantity(product._id)}>-</PrimaryBtn>
                              
                            </td>
                              {/* To get the total price all we do is quantity x price per unit */}
                            <td>${cartProducts.filter(id => id === product._id).length * product.price}</td>
                           
              
                          </tr>
    
                        ))}
                     
                      </>
                      <tr>
                          <td></td>
                          <td>Total Price</td>
                          <td>${total}</td>


                      </tr>
                      </tbody>


                    </Table>
              
                    )}




      


            </Box>
            <Box> Box 2
              <h2>Order Information</h2>

       




              {/* For each of the inputs create an onChange field that will change based on what is entered */}
              <Input 
                type ='text' 
                placeholder = 'Name' 
                value= {name} 
                name = 'name'
                onChange={event => setName(event.target.value)}
                />
              <Input 
                type = 'text' 
                placeholder = 'Email'
                value = {email}
                name = 'email'
                onChange = {event => setEmail(event.target.value)}
                />
              <Input 
                type = 'text' 
                placeholder = 'Address'
                value = {address} 
                name = 'address'
                onChange = {event => setAddress(event.target.value)}
                />
              <CityComponent>
                <Input 
                  type='text' 
                  placeholder='City'
                  value={city} 
                  name = 'city'
                  onChange={event => setCity(event.target.value)}
                  />
                <Input 
                  type = 'text' 
                  placeholder = 'State'
                  value ={state} 
                  name = 'state'
                  onChange={event => setState(event.target.value)}
                  />

              </CityComponent>
              
              <Input 
                type = 'text' 
                placeholder = 'Zip'
                value = {zip} 
                name = 'zip'
                onChange = {event => setZip(event.target.value)}
                />
              <Input 
                type = 'text' 
                placeholder = 'Country'
                value = {country} 
                name = 'country'
                onChange = {event => setCountry(event.target.value)}
                />

              {/* Instead of having a form we are use our own createPayment handler */}
              <PrimaryBtn green={1} onClick={createPayment}>Continue to Payment</PrimaryBtn>
      
            </Box>
          
          </ColumnsWrapper>
        </Center>
    </>
    
  )
}

export default CartPage