import { css, styled } from "styled-components"

// Whatever children we pass in through props will get the button styling below


export const ButtonStyle = css`
  border:0;
  padding: 5px 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items:center;
  text-decoration: none;
  svg{
    height: 25px;
    margin-right: 5px;
  }
  ${props => props.gray && css`
      color: white;
      background-color: #6b7280;
      border: 1px solid #4b5563;
  `}
  ${props => props.green && css`
      color: white;
      background-color: 	#00693E;
  `}
  ${props => props.block && css`
      display: block;
      width: 100%; 
  `}



  ${props => props.blue && css`
      color: white;
      background-color:#0369a1;
      border: 1px solid #0ea5e9;
  `}

  ${props => props.blueOutline && css`
      color: #0ea5e9;
      background-color:transparent;
      border: 1px solid #0ea5e9;
  `}
  ${props => props.size === 'l' && css`
      font-size: 1.2rem;
      padding: 10px 20px;
      svg{
        height: 20px;
      }
    `}
  `

const StyledButton = styled.button`
    ${ButtonStyle}
    `


// Now in the featured component we have the size also being passed in so we can use that. 
// We can just pass in the rest of the props using the spread operator
const PrimaryBtn = ({children, ...restOfProps}) => {
  return (
    <StyledButton {...restOfProps}>{children}</StyledButton>
  )
}

export default PrimaryBtn