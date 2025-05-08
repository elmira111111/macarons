import "./naborCards.css";
import NaborImg1 from "../../assets/podarNaborImg1.png";
import NaborImg14 from "../../assets/podarNaborImg2.png";
import NaborImg3 from "../../assets/podarNaborImg3.png";
import NaborImg4 from "../../assets/podarNaborImg4.png";
import NaborImg5 from "../../assets/podarNaborImg5.png";
import NaborImg6 from "../../assets/podarNaborImg6.png";
import NaborImg7 from "../../assets/podarNaborImg7.png";
import NaborImg8 from "../../assets/podarNaborImg8.png";
import NaborImg9 from "../../assets/podarNaborImg9.png";
import NaborImg10 from "../../assets/podarNaborImg10.png";
import NaborImg11 from "../../assets/podarNaborImg11.png";
import NaborImg12 from "../../assets/podarNaborImg12.png";
import NaborImg13 from "../../assets/podarNaborImg13.png";
import NaborImg2 from "../../assets/korzinaImg.png";
import basket from "../../assets/basketIconBlack.svg"

const naborData = [
    {
        id: 1,
        title: "Сердце",
        description: "24 штуки в коробке в виде сердца. Ассорти из 6 вкусов",
        price: "2800 руб",
        image: NaborImg1
    },
    {
        id: 2,
        title: "Красота спасёт мир",
        description: "Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
        price: "750 руб",
        image: NaborImg2
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg3
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg4
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg5
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg6
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg7
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg8
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg9
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg10
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg11
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg12
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg13
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg14
    },
    {
        id: 3,
        title: "Круглый набор",
        description: "40 макаронс в круглой коробке с персональной надписью",
        price: "3900 руб",
        image: NaborImg1
    }
];

const NaborCards = () => {
    return (
        <div className={'container'}>
            <div className="nabor-section container-app">
                <nav className="breadcrumbs">
                    Главная &gt;<span>Подарочные наборы</span>
                </nav>
                <h2 className="nabor-title">Подарочные наборы</h2>
                <div className="nabor-filters">
                    <button>Свадьба</button>
                    <button>День рождения</button>
                    <button>Новый год</button>
                    <button>Без печати</button>
                </div>

                <div className="nabor-cards">
                    {naborData.map((item) => (
                        <div className="nabor-card" key={item.id}>
                            <img src={item.image} alt={item.title}/>
                            <div className="nabor-card-info">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                            <div className="nabor-bottom">
                                <span className="price-nabor">{item.price}</span>
                                <button className="cart-btn-nabor"><img src={basket} className={'nabor-basket'}
                                                                  style={{width: '13px', height: '19px'}} alt=""/> В
                                    корзину
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
                <button className={'bottom-button-nabor'}>Показать ещё</button>
            </div>
        </div>
    );
};

export default NaborCards;
