const CartCard = ({img, name, price}) => {
  return (
    <div className="cartCard">
        <img src={img} alt={name} />
        <p className="productName">{name}</p>
        <p className="productPrice">${price}</p>
        <button>Remove</button>
    </div>
  )
}

export default CartCard