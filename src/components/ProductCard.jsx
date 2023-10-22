import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";

const ProductCard = ({product}) => {
  const { cartList, addToCart, removeFromCart } = useCart();
  const [isInCart, setIsInCart] = useState(false);

  const {img, name, price} = product;
  
  useEffect(() => {
    const productIsInCart = cartList.find(item => item.name === name);

    if(productIsInCart){
      setIsInCart(true);
    }
    else {
      setIsInCart(false);
    }

  }, [cartList, name])

  return (
    <div className='productCard'>
        <img src={img} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
            <p>${price}</p>
            {isInCart ? (<button className="remove" onClick={() => removeFromCart(product)}>Remove</button>) : (<button onClick={() => addToCart(product)}>Add To Cart</button>)}
        </div>
    </div>
  )
}

export default ProductCard