import CartContextProvider from "@/components/CartContext"
import { createGlobalStyle } from "styled-components"
import { Helmet } from "react-helmet"

// make a styled components for styling of the body
const GlobalStyles = createGlobalStyle`
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
      {/* Instead of importing this google font in Global styles, our error message recommends we use a helmet */}
      <Helmet>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
        />
      </Helmet>

      <GlobalStyles/>
      
      {/* Here we are using the cart context provider and passing in the component as children */}
      <CartContextProvider> 
        <Component {...pageProps} />
      </CartContextProvider>
    </>
  )

  
  
}
