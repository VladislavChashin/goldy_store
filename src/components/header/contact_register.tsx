import favorite from './img/favorite.svg'
import chart from './img/chart.svg'
import bag from './img/bag.svg'
import logo from './img/logo.svg'
import map from './img/map.svg'
import phone from './img/phone.svg'

export function Register(){
    return(
        <div className="contact_register">
            <div className="content">
                <div className="content_contact">
                    <a href=""><img src={map} alt=""/>Санкт-Петербург</a>
                    <a href="tel:+"><img src={phone} alt=""/>8 800 785-25-35</a>
                </div>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="content_register">
                    <p><a href="">Вход</a> | <a href="">Регистрация</a></p>
                    <div className="icons">
                        <a href=""><img src={favorite} alt=""/> <span>0</span></a>
                        <a href=""><img src={chart} alt=""/></a>
                        <a href=""><img src={bag} alt=""/></a>
                    </div>
                </div>
            </div>
        </div>
    )
}