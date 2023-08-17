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
`

const ProductInfoBox = styled.div`
    margin-top: 10px;
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
            ${price}
            <Button blue={1}><CartIcon/></Button>
        </ProductInfoBox>
        
    </ProductWrapper>
   
  )
}

export default ProductBox