

import { styled } from "styled-components"

const ProductsGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
`


const NewProducts = ({newProducts}) => {
  return (
    <ProductsGrid>
        {newProducts && newProducts.map(product => (
            <div>{product.title}</div>
        ))}



    </ProductsGrid>
  )
}

export default NewProducts