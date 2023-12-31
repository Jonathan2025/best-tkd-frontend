import styled from "styled-components"
import Center from "./Center"
import ProductBox from "./ProductBox"

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 20px;
    padding-top: 10px;
`

const Title = styled.h2`
  color: white;
  font-weight: 100;
`


const NewProducts = ({newProducts}) => {
  return (

   
    <Center>
        <Title>Memberships and Products</Title>
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