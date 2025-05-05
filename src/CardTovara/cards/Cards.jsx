import "./cards.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import cardsImg1 from "../../assets/cardsImg1.png";
import cardsImg2 from "../../assets/cardsImg2.png";
import cardsImg3 from "../../assets/cardsImg3.png";
import cardsImg4 from "../../assets/cardsImg4.png";
import basket from "../../assets/korzinaBasket.svg"
import basketBlack from "../../assets/basketIconBlack.svg"
import prev from "../../assets/buttonPrev.svg";
import next from "../../assets/buttonNext.svg";

import { useRef, useEffect, useState } from "react";

const cardsData = [
    {
        id: 1,
        img: cardsImg1,
        title: "1 макарон и 1 эклер",
        description: "промо-набор",
        oldPrice: "160 сом",
        newPrice: "90 сом",
    },
    {
        id: 2,
        img: cardsImg2,
        title: "Всего понемногу",
        description:
            "3 эклера, 4 трубочки, 6 макарун.<br />Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
        newPrice: "750 сом",
    },
    {
        id: 3,
        img: cardsImg3,
        title: "Ещё побольше",
        description:
            "3 эклера, 4 трубочки, 6 макарун.<br />Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
        newPrice: "3900 сом",
    },
    {
        id: 4,
        img: cardsImg4,
        title: "Ещё побольше",
        description:
            "3 эклера, 4 трубочки, 6 макарун.<br />Вкусы: клубника - базилик, кокос, голубой сыр, пармезан",
        newPrice: "3900 сом",
    },
];


const prepareSlides = (data, minCount) => {
    const result = [...data];
    while (result.length < minCount) {
        result.push(
            ...data.map((item) => ({
                ...item,
                id: Math.random(),
            }))
        );
    }
    return result;
};

const Cards = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const [swiperReady, setSwiperReady] = useState(false);
    const extendedCards = prepareSlides(cardsData, 5);

    useEffect(() => {
        setSwiperReady(true);
    }, []);

    return (
        <div className="cards-wrapper container-app">
            <h2>Вам могут понравиться</h2>

            <div ref={prevRef} className="custom-prev">
                <img src={prev} alt="Назад" />
            </div>
            <div ref={nextRef} className="custom-next">
                <img src={next} alt="Вперёд" />
            </div>

            {swiperReady && (
                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={20}
                    slidesPerView={4}
                    loop={true}
                    autoplay={{
                        delay: 3000000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        prevEl: prevRef.current,
                        nextEl: nextRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                        swiper.params.navigation.prevEl = prevRef.current;
                        swiper.params.navigation.nextEl = nextRef.current;
                    }}
                    className="cards-container"
                >
                    {extendedCards.map((card) => (
                        <SwiperSlide key={card.id}>
                            <div className="card">
                                <img src={card.img} alt="" className={'card-img'} />
                                <div className="card-content">
                                    <h3>{card.title}</h3>
                                    <p dangerouslySetInnerHTML={{ __html: card.description }}></p>
                                </div>
                                <div className="price">
                                    <div>
                                        {card.oldPrice && <div className="old-price">{card.oldPrice}</div>}
                                        <div className="new-price">{card.newPrice}</div>
                                    </div>
                                    <button className="btn-cards">
                                        <img src={basketBlack} className={'basket-icon'} alt=""/>В корзину
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            )}

            <button className="bottom-button">Все готовые наборы</button>
        </div>
    );
};

export default Cards;
