import { NavLink, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import logo from '../assets/logo.png';

const Header = () => {
  const { cartList } = useCart();
  
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
            <p>Cart: {cartList.length}</p>
        </Link>
    </header>
  )
}

export default Header