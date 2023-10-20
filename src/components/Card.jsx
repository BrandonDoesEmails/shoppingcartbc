import image from '../assets/1001.png'

const Card = ({img, name, price}) => {
  return (
    <div className='card'>
        <img src={img} alt={name} />
        <p>{name}</p>
        <div>
            <p>${price}</p>
            <button>Add To Cart</button>
        </div>

    </div>
  )
}

export default Card