import { Outlet } from 'react-router-dom'
import { Link } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
<div>
  <header>
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/movies'> Movies</Link>
    </nav> 
  </header>
  <Outlet/>
</div>
  )
}

export default SharedLayout;