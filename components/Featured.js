// Here we will create a component that will have the featured product
import Center from "./Center"
import { styled } from "styled-components"
import Button from "./Button"
// Styled component for the background 
const Background = styled.div`
   background-color: #003153;
   color:white;
   padding: 30px 0;

`
const Title = styled.h1`
    margin:normal;
    font-weight: bold;
    font-size: 3rem;
`
const Desc = styled.p`
    color: #D3D3D3;
    font-size: 0.8rem;
`



// Create a wrapper that will create 2 columns for the 2 divs below (image and text) both different sizes
const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 1fr 1.5fr;
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
                    <BtnWrapper>
                        <Button gray>Read More</Button>
                        {/* we can pass in props like size into primary btn component */}
                        <Button indigo>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                            </svg>

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