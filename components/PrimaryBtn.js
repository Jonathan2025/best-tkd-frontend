import { styled } from "styled-components"

// Whatever children we pass in through props will get the button styling below


const StyledButton = styled.button`
    background-color:#818cf8;
    border:0;
    color:white;
    padding: 5px 15px;
    border-radius: 5px;

`

const PrimaryBtn = ({children}) => {
  return (
    <StyledButton>{children}</StyledButton>
  )
}

export default PrimaryBtn