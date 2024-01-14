
import './App.css';
import Hero from './layouts/Hero';
import Navbar from './layouts/Navbar';
import Notification from './layouts/Notification';
import TrendingProducts from './layouts/TrendingProducts';

function App() {
  return (
    <div>

      <Notification />

      <Navbar />

      <Hero />

      <TrendingProducts />

      <TrendingProducts />

    </div>
  );
}

export default App;
