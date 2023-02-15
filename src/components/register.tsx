import favorite from './sourse/img/svg/favorite.svg'
import chart from './sourse/img/svg/chart.svg'
import bag from './sourse/img/svg/bag.svg'

export function Register(){
    return(
        <>
            <p><a href="">Вход</a> | <a href="">Регистрация</a></p>
            <div className="icons">
                <a href=""><img src={favorite} alt=""/></a>
                <a href=""><img src={chart} alt=""/></a>
                <a href=""><img src={bag} alt=""/></a>
            </div>
        </>
    )
}