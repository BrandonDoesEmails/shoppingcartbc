import CartCard from "../components/CartCard";
import { list } from "../consts/consts";
import { useTitle } from '../hooks/useTitle';

const Cart = () => {
  useTitle('Cart');

  return (
    <main>
        <div className="cart">
            <h1>Cart Items: 6</h1>
            <div className="item-list">
                {list.map((item) => (<CartCard key={item.name} {...item}  />
                ))}
            </div>           
          </div>     
    </main>
  )
}

export default Cart