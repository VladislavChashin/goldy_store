import { useState } from 'react';
import { Register } from './components/header/contact_register';
import { Search } from './components/header/navbar_search';
import { PopularCategory } from "./components/main/popular_cat";
import { Sale } from "./components/main/sale";
import { Slider } from "./components/main/slider";
import { ProductOfDay } from "./components/main/productOfDay";
import { Article } from "./components/footer/articles";


export function App(){
    const [count, setCount] = useState(0)
    return(
        <>
            <header>
                <Register state={count} setState={setCount}/>
                <Search/>
            </header>
            <main>
                <Slider/>
                <PopularCategory/>
                <Sale state={count} setState={setCount}/>
                <ProductOfDay/>
            </main>
            <footer>
                <Article/>
            </footer>
        </>
    )
}