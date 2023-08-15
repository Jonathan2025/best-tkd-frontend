import { css, styled } from "styled-components"

// Whatever children we pass in through props will get the button styling below


const StyledButton = styled.button`
    
    border:0;
    padding: 5px 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items:center;
    svg{
      height: 25px;
      margin-right: 5px;
    }
    ${props => props.gray && css`
        color: #374151;
        background-color: #a1a1aa;
        border: 1px solid #374151;
    `}
    ${props => props.indigo && css`
        color: #312e81;
        background-color:#818cf8;
        border: 1px solid #4338ca;
    `}
    ${props => props.size === 'l' && css`
        font-size: 1.2rem;
        padding: 10px 20px;
        svg{
          height: 20px;
        }
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