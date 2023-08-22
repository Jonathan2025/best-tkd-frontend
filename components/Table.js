// Creating a styled component for the table in cart.js
import { styled } from "styled-components"


// we can also styled the elements WITHIN this styled component such as th 
const StyledTable = styled.table`
    width: 100%;
    
    th{
        text-align: left;
        text-transform:uppercase;
        color: 	#B8B8B8;
    }
    td{
        border-top: 1px solid black;
    }

`
// we pass all of the props into the styled table component 
const Table = (props) => {
  return (
    <StyledTable {...props}/>
  )
}

export default Table