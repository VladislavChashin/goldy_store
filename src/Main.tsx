import { PopularCategory } from "./components/main/popular_cat";
import { Sale } from "./components/main/sale";
import { Slider } from "./components/main/slider";
import './components/main/css/slider.css';
import './components/main/css/popular_cat.css'
import './components/main/css/sale.css'

function Main() {
    return (
      <main>
        <Slider/>
        <PopularCategory/>
        <Sale/>
      </main>
    );
  }

export default Main