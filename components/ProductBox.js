import { styled } from "styled-components"
import Button from "./Button"
import CartIcon from "./icons/CartIcon"
const ProductWrapper = styled.div`


`

// Image box styled component
const ImageBox = styled.div`
    background-color: 	#787878;
    color: white;
    padding:20px;
    height: 135px;
    text-align:center;
    display:flex;
    justify-content: center;
    border-radius: 10px;
    img{
        border-radius: 5px;
        max-width: 100%;
        max-height: 125px;
    }
`

const Title = styled.h3`
    font-weight: normal;
    margin: 0;
    color:white;
`

const ProductInfoBox = styled.div`
    margin-top: 10px;
    
`

// space between pushes the first item to the left and the other item to the right
const PriceRow = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 5px;
    
`


const Price = styled.span`
    color:white;
    font-size: 18px;


`


// Again the spread operator allows us to access the id, title and all other information
const ProductBox = ({_id, title, description, price, images}) => {
  return (
    <ProductWrapper>

        <ImageBox>
            <img src={images[0]} alt=""/>
        </ImageBox>
        
        <ProductInfoBox>
            <Title>{title}</Title>

            <PriceRow>
                <Price>${price}</Price>
                <Button blue={1}>Add to Cart</Button>
            </PriceRow>
            
        </ProductInfoBox>
        
    </ProductWrapper>
   
  )
}

export default ProductBox