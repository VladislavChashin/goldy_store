import braslets from '../main/img/shop/braslets.png'
import earrings from '../main/img/shop/earrings.png'
import molw_ring from '../main/img/shop/molw_ring.png'
import necklaces from '../main/img/shop/necklaces.png'
import rings from '../main/img/shop/rings.png'
import watchs from '../main/img/shop/watchs.png'
import { ICategories } from './model'

export const categories:ICategories[] = [
    {
        id: 1,
        image: rings,
        p: 'Кольца',
    },
    {
        id: 2,
        image: earrings,
        p: 'Серьги',
    },
    {
        id: 3,
        image: molw_ring,
        p: 'Помолвочные кольца',
    },
    {
        id: 4,
        image: braslets,
        p: 'Браслеты',
    },
    {
        id: 5,
        image: necklaces,
        p: 'Колье и подвески',
    },
    {
        id: 6,
        image: watchs,
        p: 'Часы',
    },

]