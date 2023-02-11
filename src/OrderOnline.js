import React from 'react';
import './OrderOnline.css'
import CardContainer from './Card'
const OrderOnline =()=>{
    return(
        <div className='app__online-menu' id="order" >
        <div className='app__order-h1'>
         <h1>This Week Specials!</h1>
         <button className='app__order-button'>Online Menu</button>
        </div>
         <CardContainer/>
        </div>
    );
}
export default OrderOnline;