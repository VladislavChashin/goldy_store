import searchImg from './img/search.svg'

export function Search(){
    return(
        <div className="navbar">
            <div className="content">
                <nav>
                    <ul>
                    <li><a href="">Каталог</a></li>
                    <li><a href="">Акции</a></li>
                    <li><a href="">Бренды</a></li>
                    <li><a href="">Магазины</a></li>
                    <li><a href="">О нас</a></li>
                    <li><a href="">Доставка и оплата</a></li>
                    <li><a href="">Статьи</a></li>
                    </ul>
                </nav>
                <div className="search" id="search">
                    <img src={searchImg} alt=""/>
                    <input type="search" name="" id="" placeholder="Поиск по сайту"></input>
                </div>
            </div>
      </div>
    )
}