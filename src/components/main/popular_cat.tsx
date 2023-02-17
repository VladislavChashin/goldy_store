import {categories} from '../data/data_pop-card'
import { ICategories } from '../data/model'

interface CategoryProps{
    categ: ICategories
}

function Cards({categ}: CategoryProps){

    return(
        <div className="cards">
            <img src={categ.image} alt={categ.p} />
            <p>{categ.p}</p>
        </div>
    )
}

export function PopularCategory(){
    return(
        <div className="popular">
            <div className="popular_wrap">
                <h3>Популярные категории</h3>
                <div className="cards_wrap">
                    {categories.map(category => (<Cards categ={category} key={category.id}/>))}
                </div>
            </div>
        </div>
    )
}