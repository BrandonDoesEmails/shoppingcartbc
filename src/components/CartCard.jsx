import { useCart } from "../context/CartContext";

const CartCard = ({product}) => {
  const {img, name, price} = product;
  const { removeFromCart } = useCart();

  return (
    <div className="cartCard">
        <img src={img} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button onClick={() => removeFromCart(product)}>Remove</button>
    </div>
  )
}

export default CartCard