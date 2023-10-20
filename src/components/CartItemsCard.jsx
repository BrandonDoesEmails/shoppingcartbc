const CartItemsCard = ({img, name, price}) => {
  return (
    <div className="cart-card">
        <img src={img} alt={name} />
        <div>
            <p className="productName">{name}</p>
            <p className="productPrice">${price}</p>
            <button>Remove</button>
        </div>
    </div>
  )
}

export default CartItemsCard