import Card from '../components/Card';
import { list } from '../consts/consts';
import { useTitle } from '../hooks/useTitle';

const Home = () => {
  useTitle('Home');
  return (
    <main>
        {list.map((item) => (
          <Card key={item.name} {...item} />
        ))}
    </main>
  )
}

export default Home