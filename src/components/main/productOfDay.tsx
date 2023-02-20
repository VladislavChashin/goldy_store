export function ProductOfDay(){
    return(
        <div className="productday">
            <div className="productday_wrap">
                <h3>Товар дня</h3>
                <div className="content">
                    <div className="content_image">
                        <span></span><span></span><span></span>
                        <div className="image">
                            <img src="" alt="" />
                        </div>
                    </div>
                    <div className="content_text">
                        <div className="text_info">
                            <div className="star">
                                <img src="" alt="" />
                            </div>
                            <h2>Кольцо из золота с брилиантами</h2>
                            <p>Артикул: 1012076</p>
                            <div className="priceTimer">
                                <div className="price">
                                    <p>22000 ₽ <s>60000 ₽</s></p>
                                    <span>-45%</span>
                                </div>
                                <div className="timer">
                                    <div className="time hour">
                                        <p>12</p>
                                        <p>часов</p>
                                    </div>
                                    <p>:</p>
                                    <div className="time minets">
                                        <p>46</p>
                                        <p>минут</p>
                                    </div>
                                    <p>:</p>
                                    <div className="time second">
                                        <p>51</p>
                                        <p>секунд </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="interactions">
                            <div className="color">
                                <p>Цвет</p>
                                <span></span><span></span><span></span><span></span>
                            </div>
                            <div className="size">
                                <p>Размер</p>
                                <span>16,5</span><span>17,5</span><span>18,5</span><span>19</span>
                            </div>
                            <div className="pay">
                                <div className="buttons">
                                    <button>В корзину</button>
                                    <button>Купить в 1 клик</button>
                                </div>
                                <div className="interfer">
                                    <div className="save">
                                        <img src="" alt="" />
                                        <p>Сохранить</p>
                                    </div>
                                    <div className="compare">
                                        <img src="" alt="" />
                                        <p>Сравнить</p>
                                    </div>
                                    <div className="share">
                                        <img src="" alt="" />
                                        <p>Поделиться</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}