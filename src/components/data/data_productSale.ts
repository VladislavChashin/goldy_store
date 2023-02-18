import ring_one from '../main/img/shop/ring-one.png'
import ring_two from '../main/img/shop/ring-two.png'
import ring_thre from '../main/img/shop/ring-thre.png'
import ring_four from '../main/img/shop/ring-four.png'
import { IProduct } from './model'

export const product:IProduct[] = [
    {
        id:1,
        images: ring_one,
        sale: true,
        price: 45000,
        prevusePrise: '65000',
        numSale: '45',
    },
    {
        id:2,
        images: ring_two,
        sale: false,
        price: 56000,
        prevusePrise: '',
        numSale: '',
    },
    {
        id:3,
        images: ring_thre,
        sale: false,
        price: 29000,
        prevusePrise: '',
        numSale: '',
    },
    {
        id:4,
        images: ring_four,
        sale: false,
        price: 34000,
        prevusePrise: '',
        numSale: '',
    },
]