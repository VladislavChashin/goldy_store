import rings from '../footer/img/blog/ring.jpg'
import kolie from '../footer/img/blog/kolie.jpg'
import kolie_two from '../footer/img/blog/kolie_two.jpg'
import woman_kolie from '../footer/img/blog/woman_kolie.jpg'
import { IArticle } from './model'

export const article:IArticle[] = [
    {
        id: 1,
        image: rings,
        date: '21 февряаля 2023',
        page: 'Обручальные кольца: тренды 2023'
    },
    {
        id: 2,
        image: woman_kolie,
        date: '17 февряаля 2023',
        page: 'Главные ювелирные тренды года'
    },
    {
        id: 3,
        image: kolie_two,      
        date: '7 февраля 2023',
        page: 'Жемчуг: 7 малоизвестных фактов о культовом украшении'
    },
    {
        id: 4,
        image: kolie,
        date: '21 января 2023',
        page: 'Как отличить золото от подделки: 10 практических советов'
    }
]