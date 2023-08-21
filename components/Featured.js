// Here we will create a component that will have the featured product
import Center from "./Center"
import { styled } from "styled-components"
import Button from "./Button"
import ButtonLink from "./ButtonLink"
import CartIcon from "./icons/CartIcon"
import { useContext } from "react"
import { CartContext } from "./CartContext"
// Styled component for the background 
const Background = styled.div`
   background-color: #181818;
   color:white;
   padding: 30px 0;

`
const Title = styled.h1`
    margin:normal;
    font-weight: normal;
    font-size: 3rem;
    text-align:center;
`
const Desc = styled.p`
    color: #D3D3D3;
    font-size: 0.8rem;
`



// Create a wrapper that will create 2 columns for the 2 divs below (image and text) both different sizes
const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 1.3fr 1.0fr;
    gap: 40px;
    img{
        max-width: 100%
    };
`

// This will be used to center anything within the column styled component
const Column = styled.div`
    display: flex; 
    align-items center;
`


const BtnWrapper = styled.div`
    display: flex; 
    gap: 10px;
    margin-top: 20px;

`


const Featured = ({product}) => {

    // getting the addProduct function from cart context
    const {addProduct} = useContext(CartContext)


    return (
        <Background>
            <Center>
            
                <Wrapper>
                    <div>
                        <Title>{product.title}</Title>
                        <Desc>{product.description}</Desc>
                        <BtnWrapper>
                            <ButtonLink href={'/products/'+product._id} gray={1} >Read More</ButtonLink>
                            {/* we can pass in props like size into primary btn component */}
                            {/* for the add to cart button we make a call to the addProduct function inside of cart context */}
                            <Button blue={1} onClick={() => addProduct(product._id)}>
                                <CartIcon/>

                                Add to Cart</Button>
                        </BtnWrapper>
                    
                    </div>
                    <Column>
                        <img src='https://capstonefilestorage.blob.core.windows.net/capstonecontainer/tkd-removebg.png'/>
                    </Column>
                </Wrapper>
            </Center>
        </Background>
        
    )
}

export default Featured