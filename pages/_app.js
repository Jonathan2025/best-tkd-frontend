import CartContextProvider from "@/components/CartContext"
import { createGlobalStyle } from "styled-components"


// make a styled components for styling of the body
const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
  body{ 
    padding:0 auto;
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #282828;
  }
`

export default function App({ Component, pageProps }) {
  return(
    <>
      <GlobalStyles/>
      
      {/* Here we are using the cart context provider and passing in the component as children */}
      <CartContextProvider> 
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  )

  
  
}
