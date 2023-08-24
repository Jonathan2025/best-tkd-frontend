import { styled } from "styled-components" 

const StyledInput = styled.input`
    width: 100%;
    padding: 5px;
    margin-bottom: 5px; 
    border: 3px solid #0369a1;
    border-radius: 5px; 
    box-sizing;border-box;


`

// we will use this styled input component in our cart page 
const Input = (props) =>{
    return <StyledInput {...props} />
}

export default Input