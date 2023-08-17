import styled from "styled-components"
import Center from "./Center"
import ProductBox from "./ProductBox"

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`


const NewProducts = ({newProducts}) => {
  return (
    <Center>
        {/* now here we call the products grid to map the products out , and put this within the center styled component */}
        <ProductsGrid>
        {newProducts && newProducts.map(product => (
            // Now we call the product box component and then using the spread operator we can pass in everything
            <ProductBox {...product}/>
        ))}



    </ProductsGrid>
    </Center>
   
  )
}

export default NewProducts