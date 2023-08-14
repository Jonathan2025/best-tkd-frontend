
import Link from 'next/link'
import { styled } from 'styled-components'
import Center from './Center'
// Utilized Styled Components documentation for syntax, add our css inside the variable
const StyledHeader = styled.header`
  background-color: #003153;
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
  return (
    <StyledHeader>

      {/* Now we want to put everything into our centered styled component */}
      <Center>
        <Wrapper>
          <StyledLogo href={'/'}>Best Taekwondo Online</StyledLogo>
            <StyledNav> 
                <NavLink href={'/'}>Home</NavLink>
                <NavLink href={'/products'}>All Products</NavLink>
                <NavLink href={'/categories'}>Categories</NavLink>
                <NavLink href={'/account'}>Account</NavLink>
                <NavLink href={'/cart'}>Cart (0)</NavLink>
            </StyledNav>
        </Wrapper>
        
      </Center>


        
    </StyledHeader>
  )
}

export default Header