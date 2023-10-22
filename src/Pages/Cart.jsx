import CartCard from "../components/CartCard";
import { useCart } from "../context/CartContext";
import { useTitle } from '../hooks/useTitle';

const Cart = () => {
  useTitle('Cart');
  const {total, cartList} = useCart();

  return (
    <main>
        <div className="cart">
            <h1>Cart Items: {cartList.length} / ${total}</h1>
            <div className="item-list">
                {cartList.map((product) => (<CartCard key={product.name} product={product}  />
                ))}
            </div>           
          </div>     
    </main>
  )
}

export default Cart