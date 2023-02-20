import { Outlet } from 'react-router-dom'
import { Suspense } from 'react';
import { StyledLink, Container, Header  } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
<Container>
  <Header>
    <nav>
      <StyledLink  to='/home'>Home</StyledLink >
      <StyledLink  to='/movies'> Movies</StyledLink >
    </nav> 
  </Header>
  <Suspense fallback={<div>Loading page...</div>}>
    <Outlet />
  </Suspense>
</Container>
  )
}

export default SharedLayout;