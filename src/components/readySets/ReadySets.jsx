import React from 'react'
import './ReadySets.css'

import heart from '../../assets/images/heart.png'
import kvadrat from '../../assets/images/kvadrat.png'
import sircle from '../../assets/images/sircle.png'
import sixbox from '../../assets/images/sixbox.png'
import sixteen from '../../assets/images/sixteen.png'

const macarons = [
    {
        img: heart,
        name: 'Сердце',
        title: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
        price: 2800,
        icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
     {
        img: kvadrat,
        name: 'Красота спасёт мир ',
        title: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
        price: 750,
          icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
     
      {
        img: sircle,
        name: 'Круглый набор',
        title: '40 макаронс в круглой коробке с персональной надписью',
        price: 3900,
          icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
        {img: sixbox,
        name: 'Набор на 9',
        title: 'Набор из 9 штук в квадратной коробке. Вкусы: шоколад, фисташка, вишня',
        price: 3900,
         icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },

     {
        img: sixteen,
        name: 'Набор на 16',
        title: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ',
        price: 3900,
         icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
    
       {
        img: sircle,
        name: 'Сердце ',
        title: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
        price: 3900,
      icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
       
     {
        img: heart,
        name: 'Сердце',
        title: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
        price: 2800,
         icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
     {
        img: kvadrat,
        name: 'Красота спасёт мир ',
        title: 'Набор 16 шт. Вкусы: клубника - базилик, кокос, голубой сыр, пармезан',
        price: 750,
          icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
       {
        img: sircle,
        name: 'Круглый набор',
        title: '40 макаронс в круглой коробке с персональной надписью',
        price: 3900,
          icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
  {
    img: sixbox,
           
       name: 'Набор на 16',
        title: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ',
        price: 3900,
          icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },

     {
        img: sixteen,
         name: 'Набор на 16',
        title: 'Набор 16 шт. Вкусы: соленая карамель, голубой сыр, пармезан, шоколад ',
        price: 3900,
          icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
      
     
        {
        img: sircle,
        name: 'Сердце',
        title: '24 штуки в коробке в виде сердца. Ассорти из 6 вкусов',
        price: 3900,
         icon: <i className="bi bi-bag"></i>,
        button: 'В корзину'
    },
     
     
      
        
       

      
    
    

]

const ReadySets = () => {
  return (
    <div className='container'>
      <div className='main'>
         <span>Главная</span><span>›</span>
           <span>Каталог</span><span>›</span>
         <span>Готовые наборы</span>
      </div>

      <div className='title'>
        <p>Готовые наборы</p>
      </div>

      <div className='events'>
        <p >Свадьба</p>
        <p>День рождения</p>
        <p>Новый год</p>
        <p>Без печати</p>
      </div>
<div className='sets'>
  {macarons.map((item, index) => (
    <div key={index} className="set-card">
  <img src={item.img} alt={item.name} />
  <div className="text-area">
   <p className="nameOfMac">{item.name}</p>
        <p className="items">{item.title}</p>
        <hr className='divider'/>
        <div className='twoItems'>
              <p className='currency'>{item.price} руб</p>
    <button>{item.icon} {item.button}</button>
      </div>

  </div>
</div>

  ))}
</div>
    </div>
  )
}

export default ReadySets