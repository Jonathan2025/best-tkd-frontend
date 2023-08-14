
import Link from 'next/link'
import { styled } from 'styled-components'
import Center from './Center'
// Utilized Styled Components documentation for syntax, add our css inside the variable
const StyledHeader = styled.header`
  background-color: #4B9CD3;
`


// Styled Component for Logo LINK
const StyledLogo = styled(Link)`
  color:white;
  text-decoration: none;
`

const Header = () => {
  return (
    <StyledHeader>

      {/* Now we want to put everything into our centered styled component */}
      <Center>
        <StyledLogo href={'/'}>Best Taekwondo Online</StyledLogo>
          <nav> 
              <Link href={'/'}>Home</Link>
              <Link href={'/products'}>All Products</Link>
              <Link href={'/categories'}>Categories</Link>
              <Link href={'/account'}>Account</Link>
              <Link href={'/cart'}>Cart (0)</Link>
          </nav>
      </Center>


        
    </StyledHeader>
  )
}

export default Header