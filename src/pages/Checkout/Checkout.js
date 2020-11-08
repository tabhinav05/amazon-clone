import React from 'react'
import {Link} from 'react-router-dom';
import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import Subtotal from '../../components/Subtotal/Subtotal';
import { useStateValue } from '../../StateProvider';

import './Checkout.css';

function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    return (
        <div className='checkout'>
           <div className='checkout-left'>
               <img className='checkout-ad'
               src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt='' />

               <div>
                   <h3>Hello, {!user? 'Guest': user.email}</h3>
                   <div>{basket.length?<h2 class='checkout-title' >Your Shopping basket</h2> :<div className='no-item'>
                   <img src='https://m.media-amazon.com/images/G/31/cart/empty/kettle-desaturated._CB424694257_.svg' alt='' />
                   <div>
                   <h1>Your Shopping Cart is empty</h1>
                   <p>Your shopping cart is waiting. Give it purpose – fill it with groceries, clothing, household supplies, electronics and more. <br/>Continue shopping on the <Link to='/'>amazon homepage</Link></p>
                   </div>
                    </div> }</div>
                  
                   {basket.map(item => (
                       <CheckoutProduct
                       id={item.id}
                       title={item.title}
                       image={item.image}
                       price={item.price}
                       rating={item.rating} />
                   ))}

               </div>
           </div>

           <div className='checkout-right'>
               <Subtotal />

           </div>

        </div>
    )
}

export default Checkout
