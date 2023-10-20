import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt="Shopping Logo" />
            <span>Shopping Cart</span>
          </Link>
        </div>
        <nav className='navigation'>
            <NavLink className='link' to='/' end>Home</NavLink>
            <NavLink className='link' to='/cart'>Cart</NavLink>
        </nav>
        <a href="#">
            <p>Cart: 6</p>
        </a>
    </header>
  )
}

export default Header