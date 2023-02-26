import favorite from './img/favorite.svg'
import chart from './img/chart.svg'
import bag from './img/bag.svg'
import logo from './img/logo.svg'
import map from './img/map.svg'
import phone from './img/phone.svg'
import { useState } from 'react'


interface StateProps{
    state: number,
    setState: any
}

export function Favorite({state, setState}: StateProps){
    return(
        <a href="#"><img src={favorite} alt="sdf"/> {state == 0 ? <></> : <span>{state}</span>}</a>
    )
}


export function Register({state, setState}: StateProps){
    const [visible, setVisible] = useState(false)

    return(
    <>  
        {visible ? <ModalReg state={visible} setState={setVisible}/> : <></>}
        {visible ? <ModalAuth state={visible} setState={setVisible}/> : <></>}
        <div className="contact_register">
            <div className="content">
                <div className="content_contact">
                    <a href="#"><img src={map} alt="ad"/>Санкт-Петербург</a>
                    <a href="tel:+"><img src={phone} alt="asd"/>8 800 785-25-35</a>
                </div>
                <div className="logo">
                    <img src={logo} alt=""/>
                </div>
                <div className="content_register">
                    <p><a href="#" onClick={()=>{setVisible(prod => !prod)}}>Вход</a> | <a href="#" onClick={()=>{setVisible(prod => !prod)}}>Регистрация</a></p>
                    <div className="icons">
                        <Favorite state={state} setState={setState}/>
                        <a href="#"><img src={chart} alt="sf"/></a>
                        <a href="#"><img src={bag} alt="sdf"/></a>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

function ModalReg(props:any){
    const { state, setState } = props;
    return(
        <div className="modal_overlay">
            <div className="modal_wrap">
                <h4>Регистрация</h4>
                <form action="" method="post">
                    <input type="text" placeholder='Логин'/>
                    <input type="email" name="email" id="email" placeholder='Почта'/>
                    <input type="password" name="pass" id="pass" placeholder='Пароль'/>
                    <button type="submit" onClick={() => setState(false)}>Зарегистрироваться</button>
                </form>
            </div>
        </div>
    )
}

function ModalAuth(props:any){
    const { state, setState } = props;
    return(
        <div className="modal_overlay">
            <div className="modal_wrap">
                <h4>Авторизация</h4>
                <form action="" method="post">
                    <input type="email" name="email" id="email" placeholder='Почта'/>
                    <input type="password" name="pass" id="pass" placeholder='Пароль'/>
                    <button type="submit" onClick={() => setState(false)}>Войти</button>
                </form>
            </div>
        </div>
    )
}