import "./korzina.css";
import naborImg1 from  "../../src/assets/podarNaborImg1.png"

const Korzina = () => {
    return (
        <div className={'container'}>
            <nav className="breadcrumbs">
                Главная &gt; <span> Корзина </span>
            </nav>
            <div className="cart container-app">
                <h1>Ваша корзина</h1>
                <p className="subtitle">3 товара / 1030 руб.</p>

                <div className="cart-container">
                    <div className="cart-items">
                        <div className="item">
                            <img src={naborImg1} alt="Набор макарон" className="product-img"/>
                            <div className="details">
                                <h2>Набор макарон 12 шт.</h2>
                                <p>Трюфель 2 шт.<br/>Розмарин 3 шт.<br/>Ананас 1 шт.<br/>Кокос 4 шт.</p>
                                <p className="gift">Скидка по акции “Эклер в подарок”</p>
                            </div>
                            <div className="quantity-control">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div className="price-info">
                                <p>Цена: <span>950 сом</span></p>
                                <p className="discount">Скидка: -30 сом</p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="img-placeholder"></div>
                            <div className="details">
                                <h2>Упаковка с цветами</h2>
                            </div>
                            <div className="quantity-control">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div className="price-info">
                                <p>Цена: <span>50 сом</span></p>
                            </div>
                        </div>

                        <div className="item">
                            <div className="img-placeholder"></div>
                            <div className="details">
                                <h2>Открытка с пожеланием</h2>
                            </div>
                            <div className="quantity-control">
                                <button>-</button>
                                <span>1</span>
                                <button>+</button>
                            </div>
                            <div className="price-info">
                                <p>Цена: <span>30 сом</span></p>
                            </div>
                        </div>

                        <div className="total-text">
                            Общая стоимость Вашей покупки без учета доставки составляет:
                            <span className="highlighted">1000 сом</span>
                            <span className="crossed">1100 сом</span>
                        </div>
                    </div>

                    <div className="summary">
                        <h3>Итого</h3>
                        <div className="summary-line"><span>Стоимость товаров</span><span>700 руб</span></div>
                        <div className="summary-line"><span>Скидка</span><span>0 руб</span></div>
                        <div className="summary-line"><span>Доставка</span><span>400 руб</span></div>
                        <div className="summary-total"><span>К оплате</span><span>1100 сом</span></div>

                        <div className="promo-code">
                            <input type="text" placeholder="Введите промокод"/>
                            <button>Применить</button>
                        </div>

                        <button className="order-btn">Оформить заказ</button>
                    </div>
                </div>
                <div className="together-deal">
                    <div className="deal-header">
                        <span>Вместе дешевле!</span>
                        <div className="arrow"></div>
                    </div>

                    <div className="deal-item">
                        <img
                            src="https://via.placeholder.com/72"
                            alt="эклеры"
                            className="deal-img"
                        />
                        <span className="deal-title">Набор эклеров</span>
                        <div className="quantity-control">
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                        <div className="deal-price">
                            <span className="old-price">600&nbsp;сом</span>
                            <span className="new-price">Цена: 400&nbsp;сом</span>
                        </div>
                    </div>

                    <div className="deal-item">
                        <img
                            src="https://via.placeholder.com/72"
                            alt="трубочки"
                            className="deal-img"
                        />
                        <span className="deal-title">Набор трубочек со сгущёнкой</span>
                        <div className="quantity-control">
                            <button>-</button>
                            <span>0</span>
                            <button>+</button>
                        </div>
                        <div className="deal-price">
                            <span className="old-price">900&nbsp;сом</span>
                            <span className="new-price">Цена: 400&nbsp;сом</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Korzina;
