import ProductCard from '../components/ProductCard';
import { list } from '../consts/consts';
import { useTitle } from '../hooks/useTitle';

const Home = () => {
  useTitle('Home');
  return (
    <main>
        {list.map((item) => (
          <ProductCard key={item.name} {...item} />
        ))}
    </main>
  )
}

export default Home