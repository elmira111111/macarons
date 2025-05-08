import "./korzina.css";
import naborImg1 from  "../../src/assets/podarNaborImg1.png"

const Korzina = () => {
    return (
        <div className={'container'}>
            <nav className="breadcrumbs">
                Главная &gt; <span> Корзина </span>
            </nav>
            <div className="cart-korzina container-app">
                <h1 className={"title-korzina"}>Ваша корзина</h1>
                <p className="subtitle-korzina">3 товара / 1030 руб.</p>

                <div className="cart-korzina-container">
                    <div className="cart-items-korzina">
                        <div className="item-korzina">
                            <img src={naborImg1} alt="Набор макарон" className="cart-korzina-img"/>
                            <div className="details-korzina">
                                <h2>Набор макарон 12 шт.</h2>
                                <p>Трюфель 2 шт.<br/>Розмарин 3 шт.<br/>Ананас 1 шт.<br/>Кокос 4 шт.</p>
                                <p className="gift-korzina">Скидка по акции “Эклер в подарок”</p>
                            </div>
                            <div className="quantity-control-korzina" style={{marginLeft:'40px', marginTop:'55px'}}>
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div className="price-info-korzina" style={{marginTop:'54px',marginBottom: '-50px'}}>
                                <p>Цена: <span>950 сом</span></p>
                                <p className="discount-korzina">Скидка: <span>-30 сом</span> </p>
                            </div>
                        </div>

                        <div className="item-korzina">
                            <div className="img-placeholder"></div>
                            <div className="details-korzina">
                                <h2 style={{marginTop: '30px'}}>Упаковка с цветами</h2>
                            </div>
                            <div className="quantity-control-korzina">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div className="price-info-korzina" style={{marginTop:'30px'}}>
                                <p>Цена: <span>50 сом</span></p>
                            </div>
                        </div>

                        <div className="item-korzina">
                            <div className="img-placeholder"></div>
                            <div className="details-korzina">
                                <h2 style={{marginTop: '30px'}}>Открытка с пожеланием</h2>
                            </div>
                            <div className="quantity-control-korzina">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div className="price-info-korzina" style={{marginTop:'30px'}}>
                                <p>Цена: <span>30 сом</span></p>
                            </div>
                        </div>

                        <div className="total-text-korzina">
                            Общая стоимость Вашей покупки без учета доставки составляет:
                            <div style={{width: '150px', textAlign: 'right'}}>
                                <div className="highlighted-korzina">1000 сом</div>
                                <div className="crossed-korzina">1100 сом</div>
                            </div>
                        </div>
                    </div>

                    <div className="summary-korzina">
                    <h3>Итого</h3>
                        <div style={{borderBottom: "1px solid rgba(237, 237, 240, 1)",padding: "20px 0 20px 0"}}>
                            <div className="summary-line-korzina"><span>Стоимость товаров</span><span>700 руб</span>
                            </div>
                            <div className="summary-line-korzina"><span>Скидка</span><span>0 руб</span></div>
                            <div className="summary-line-korzina"><span>Доставка</span><span>400 руб</span></div>
                        </div>
                        <div className="summary-total-korzina"><span>К оплате</span><span>1100 сом</span></div>

                        <div className="promo-code-korzina">
                            Промокод:
                            <input type="text" placeholder="Введите промокод"/>
                            <button>Применить</button>
                        </div>

                        <button className="order-btn-korzina">Оформить заказ</button>
                    </div>
                </div>


                <div className="together-deal-korzina">
                    <div className="deal-header-korzina">
                        <span>Вместе дешевле!</span>
                        <div className="arrow-korzina"></div>
                    </div>

                    <div className="deal-item-korzina">
                        <img
                            src="https://via.placeholder.com/72"
                            alt="эклеры"
                            className="deal-img-korzina"
                        />
                        <span className="deal-title-korzina">Набор эклеров</span>
                        <div className="quantity-control-korzina">
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                        <div className="deal-price-korzina">
                            <span className="old-price-korzina">600&nbsp;сом</span>
                            <span className="new-price-korzina">Цена: 400&nbsp;сом</span>
                        </div>
                    </div>

                    <div className="deal-item-korzina">
                        <img
                            src="https://via.placeholder.com/72"
                            alt="трубочки"
                            className="deal-img-korzina"
                        />
                        <span className="deal-title-korzina">Набор трубочек со сгущёнкой</span>
                        <div className="quantity-control-korzina">
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                        <div className="deal-price-korzina">
                            <span className="old-price-korzina">900&nbsp;сом</span>
                            <span className="new-price-korzina">Цена: 400&nbsp;сом</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Korzina;
