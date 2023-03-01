import { productsList } from "./mocks/mock";
 import { images } from "./components/images";
import ListProducts from "./components/ListProducts/ListProducts";
import Hero from "./components/hero";
import Gallery from "./components/gallery";
import './app.css';

const App = () => {
  return (
    <div className="App">
      <Hero />
  <Gallery  />
    <ListProducts listData={productsList} />
    </div>
  );
}

export default App;
