import strelka from './img/svg/strelka.svg'
import eyes from './img/svg/eyes.svg'
import heart_fil from './img/svg/heart_fill.svg'
import { product } from '../data/data_productSale'
import { IProduct } from '../data/model'
import { useState } from 'react'

interface ProductProps{
    productSale: IProduct,
}

function Product({productSale}: ProductProps){
        
    return(
        <div className="product">
            <div className="top_info">
            {productSale.sale ? <p>sale</p> : <span></span>} <span><img src={eyes} alt="" /><img src={heart_fil} alt="" /></span>
            </div>
            <div className="image">
                <img src={productSale.images} alt="" />
            </div>
            <div className="bottom_info">
                <div className="price">
                    <p>{`${productSale.price} ₽`}{productSale.prevusePrise ? <s>{` ${productSale.prevusePrise} ₽`}</s>: ''}</p>
                    {productSale.sale ? <span>{`${productSale.numSale} %`}</span>: <></>}
                </div>
                <p>Стильное кольцо из белого золота c бриллиантами</p>
            </div>
        </div>
    )
}


export function Sale(){
    let [count, setCount] = useState(1)



    return(
        <div className="sale">
            <div className="sale_wraper">
                <h3>Распродажа</h3>
                <div className="select">
                    <div className="menu">
                        <p className={count === 1 ? 'active': ''} onClick={()=>{setCount(1)}}>Кольца</p>
                        <p className={count === 2 ? 'active': ''} onClick={()=>{setCount(2)}}>Серьги</p>
                        <p className={count === 3 ? 'active': ''} onClick={()=>{setCount(3)}}>Браслеты</p>
                        <p className={count === 4 ? 'active': ''} onClick={()=>{setCount(4)}}>Часы</p>
                    </div>
                    <div className="menu_button">
                        <img src={strelka} alt="nav_left" onClick={()=>{count !== 1 ? setCount(count-1): setCount(4)}} />
                        <img src={strelka} alt="nav_right" onClick={()=> {count !==4 ? setCount(count+1): setCount(1)}}/>
                    </div>
                </div>
                <div className="product_sale">
                    {product.map(products => (<Product productSale = {products} key={products.id}/>))}
                </div>
            </div>
        </div>
    )
}