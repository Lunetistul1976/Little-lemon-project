import React from 'react';
import Bruchetta from './bruchetta.svg'
import greeksalad from'./greek salad.jpg'
import lemondessert from './lemon dessert.jpg'
import Basket from'./Basket.svg'

const Card = (props) => {
  return (
    <div style={{ padding: '1rem' ,width: '300px',margin: '1rem',backgroundColor:'#EDEFEE'}}>
      <img
        src={props.imgSrc}
        alt={props.dishTitle}
        style={{width: '100%', height: '200px',objectFit: 'cover'}}
      />
      <div style={{ display: 'flex', justifyContent: 'space-between'}}>
      <h3>{props.dishTitle}</h3>
      <h4 style={{ color: 'orange' }}>{props.price}</h4>
      </div>
      <p style={{ color: '#495E57', fontSize: 'medium'}} dangerouslySetInnerHTML={{ __html: props.description }} />
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <a href="#order"style={{fontWeight: "bold",textAlign: 'center' }}
        >Order for delivery</a>
        <img src={Basket} alt="Basket icon" style={{ marginLeft: '0.5rem'}} />
      </div>
    </div>
  );
};

const CardContainer = (props) => {
  const cardData = [
    {
        dishTitle: 'Greek salad',
        price:"12.99$",
        description: 'The famous greek salad of <br/> crispy lettuce, peppers,<br/> olives and our Chicago style <br/> feta cheese, garnished with<br/> crunchy garlic and rosemary croutons. ',
        imgSrc: greeksalad,
    },
    {
        dishTitle: 'Bruschetta',
        price:"5.99$",
        description: 'Our Bruschetta is made from <br/> grilled bread that has been<br/> smeared with garlic and<br/> seasoned with salt and olive<br/> oil.',
        imgSrc:Bruchetta ,
    },
    {
        dishTitle: 'Lemon Dessert',
        price: '5.00$',
        description: 'This comes straight from <br/> grandma’s recipe book, every<br/> last ingredient has been<br/> sourced and is as authentic<br/> as can be imagined.',
        imgSrc: lemondessert,
    },
  ];

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      {cardData.map((card) => (
        <div style={{ marginRight: '1rem',backgroundcolor:'#EDEFEE' }}>
        <Card
          key={card.dishTitle}
          description={card.description}
          dishTitle={card.dishTitle}
          price={card.price}
          imgSrc={card.imgSrc}
          
        />
        </div>
      ))}
    </div>
  );
};

export default CardContainer;
