import React from 'react'

import StarRateIcon from '@material-ui/icons/StarRate';


import './CheckoutProduct.css';
import { useStateValue } from '../../StateProvider';


function CheckoutProduct({id, image, title, price, rating}) {

    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct-image' src={image } />

            <div className='checkoutProduct-info'>
                <p className='checkoutProduct-title'>{title}</p>
                <p className='checkoutProduct-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>

                <div className='checkoutProduct-rating'>
                    {Array(rating)
                    .fill()
                    .map(() =>(
                        <p><StarRateIcon /></p>
                    ))}    
                </div> 
                <button onClick={removeFromBasket}>Remove form basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
