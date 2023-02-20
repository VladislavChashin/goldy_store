import { PopularCategory } from "./components/main/popular_cat";
import { Sale } from "./components/main/sale";
import { Slider } from "./components/main/slider";
import { ProductOfDay } from "./components/main/productOfDay";

import './components/main/css/slider.css';
import './components/main/css/popular_cat.css'
import './components/main/css/sale.css'
import './components/main/css/productday.css'

function Main() {
    return (
      <main>
        <Slider/>
        <PopularCategory/>
        <Sale/>
        <ProductOfDay/>
      </main>
    );
  }

export default Main