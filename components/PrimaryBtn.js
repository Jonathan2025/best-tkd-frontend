import { css, styled } from "styled-components"

// Whatever children we pass in through props will get the button styling below


const StyledButton = styled.button`
    background-color:#818cf8;
    border:0;
    color:white;
    padding: 5px 15px;
    border-radius: 5px;
    curdor: pointer
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
    
    `}

`
// Now in the featured component we have the size also being passed in so we can use that. 
// We can just pass in the rest of the props using the spread operator
const PrimaryBtn = ({children, ...restOfProps}) => {
  return (
    <StyledButton {...restOfProps}>{children}</StyledButton>
  )
}

export default PrimaryBtn