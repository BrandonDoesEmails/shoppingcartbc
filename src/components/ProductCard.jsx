const ProductCard = ({img, name, price}) => {
  return (
    <div className='productCard'>
        <img src={img} alt={name} />
        <p className="name">{name}</p>
        <div className="action">
            <p>${price}</p>
            <button>Add To Cart</button>
        </div>

    </div>
  )
}

export default ProductCard