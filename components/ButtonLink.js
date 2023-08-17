import Link from "next/link"
import { styled } from "styled-components"
import { ButtonStyle } from "./Button"


// from the button.js file we can use the buttonstyle styled component 
const StyledLink = styled(Link)`
    ${ButtonStyle}

`


const ButtonLink = (props) => {
  return (
    <StyledLink {...props} />
  )
}

export default ButtonLink