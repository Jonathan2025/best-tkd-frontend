// Here will be the page for when the user clicks into their cart 

import Header from "@/components/Header"
import Center from "@/components/Center"
import { styled } from "styled-components"
import PrimaryBtn from "@/components/Button"


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



  
  return (
    <>
        <Header />
        <Center>
          <ColumnsWrapper>
            <Box> Box 1</Box>
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