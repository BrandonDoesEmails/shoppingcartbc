import { NavLink, Link } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
  return (
    <header>
        <Link to='/'>
        <div className='logo'>
            <img src={logo} alt="Shopping Logo" />
            <span>Shopping Cart</span>
        </div>
        </Link>
        <nav className='navigation'>
            <NavLink className='link' to='/' end>Home</NavLink>
            <NavLink className='link' to='/cart'>Cart</NavLink>
        </nav>
        <Link to="/cart">
            <p>Cart: 6</p>
        </Link>
    </header>
  )
}

export default Header