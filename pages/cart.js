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


  const {cartProducts, addProduct, decreaseProduct} = useContext(CartContext)
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




  // put the cart products into a useState
  useEffect(() => {
    if (cartProducts){
      // Make a post request using axios, We will send the ids as the body
      axios.post('/api/cart', {ids:cartProducts}).then(response => {
        setProducts(response.data)
      })
    }
  }, [cartProducts])


  // This is the function handler for when we increase the quantity, taking in the product.id as a parameter
  const increaseQuantity = (id) => {
    addProduct(id) // we get the add product from our use context above
  }

  const decreaseQuantity = (id) => {
    decreaseProduct(id) // we get the add product from our use context above
  }


  // Now for each of the product we need to get the total cost 
  let total = 0 
  for (const productId of cartProducts){
    const price = products.find(p => p._id === productId)?.price || 0 
    total += price
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
                type='text' 
                placeholder='Name' 
                value={name} 
                onChange={event => setName(event.target.value)}
                />
              <Input 
                type = 'text' 
                placeholder = 'Email'
                value = {email}
                onChange = {event => setEmail(event.target.value)}
                />
              <Input 
                type='text' 
                placeholder='Address'
                value={address} 
                onChange={event => setAddress(event.target.value)}
                />
              <CityComponent>
                <Input 
                  type='text' 
                  placeholder='City'
                  value={city} 
                  onChange={event => setCity(event.target.value)}
                  />
                <Input 
                  type='text' 
                  placeholder='State'
                  value={state} 
                  onChange={event => setState(event.target.value)}
                  />

              </CityComponent>
              
              <Input 
                type='text' 
                placeholder='Zip'
                value={zip} 
                onChange={event => setZip(event.target.value)}
                />
              <Input 
                type='text' 
                placeholder='Country'
                value={country} 
                onChange={event => setCountry(event.target.value)}
                />

              <PrimaryBtn green={1}>Continue to Payment</PrimaryBtn>
            </Box>
          
          </ColumnsWrapper>
        </Center>
    </>
    
  )
}

export default CartPage