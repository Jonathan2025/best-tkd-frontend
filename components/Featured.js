// Here we will create a component that will have the featured product
import Center from "./Center"
import { styled } from "styled-components"
import PrimaryBtn from "./PrimaryBtn"
// Styled component for the background 
const Background = styled.div`
   background-color: #003153;
   color:white;
   padding: 30px 0;

`
const Title = styled.h1`
    margin:normal;
    font-weight: bold;
`
const Desc = styled.p`
    color: #D3D3D3;
    font-size: 0.8rem;
`



// Create a wrapper that will create 2 columns for the 2 divs below (image and text) both different sizes
const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 0.8fr 1.5fr;
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



const Featured = () => {
  return (
    <Background>
        <Center>
        
            <Wrapper>
                <div>
                    <Title>Complete Sparring Set</Title>
                    <Desc>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    </Desc>
                    <button>Read More</button>
                    {/* we can pass in props like size into primary btn component */}
                    <PrimaryBtn size="l">Add to Cart</PrimaryBtn>
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