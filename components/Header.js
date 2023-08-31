
import Link from 'next/link'
import { styled } from 'styled-components'
import Center from './Center'
import { CartContext } from './CartContext'
import { useContext } from 'react'

// Utilized Styled Components documentation for syntax, add our css inside the variable
const StyledHeader = styled.header`
  background-color: #181818;
`


// Styled Component for Logo LINK
const StyledLogo = styled(Link)`
  color:white;
  text-decoration: none;
`

// this will push the logo to the left side and then links to the right
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 25px 0;
`

const StyledNav = styled.nav`
  display: flex;
  gap: 15px;
`

const NavLink = styled(Link)`
  color: #A8A8A8;
  text-decoration: none;
`


const Header = () => {


  // we can get the cart Products from the cart context 
  const {cartProducts} = useContext(CartContext)
  return (
    <StyledHeader>

      {/* Now we want to put everything into our centered styled component */}
      <Center>
        <Wrapper>
          {/* We dont want the aws information exposed so we use ENV link for our logo */}
          <a href='/'>
            <img 
            src={process.env.TKD_LOGO}
            width="150"
            height="80"
            />
          </a>
          
          {/* <StyledLogo href={'/'}>Best Taekwondo Online</StyledLogo> */}
            <StyledNav> 
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>All Products</NavLink>
                <NavLink href={'/categories'}>Categories</NavLink>
                <NavLink href={'/account'}>Account</NavLink>
                {/* When the user clicks the cart button they will see the cart item count increment */}
                <NavLink href={'/cart'}>Cart ({cartProducts.length})</NavLink>
            </StyledNav>
        </Wrapper>
        
      </Center>


        
    </StyledHeader>
  )
}

export default Header