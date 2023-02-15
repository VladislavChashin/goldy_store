import searchImg from './sourse/img/svg/search.svg'

export function Search(){
    return(
        <>
            <img src={searchImg} alt=""/>
            <input type="search" name="" id="" placeholder="Поиск по сайту"></input>
        </>
    )
}