import React from 'react'

import StarRateIcon from '@material-ui/icons/StarRate';

import './Product.css';
import { useStateValue } from '../../StateProvider';


function Product({ id, title, image, price, rating }) {

    const [{basket}, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating
            }
        });
    };

    return (
        <div className='product'>
            <img src={image} alt='' />
            <div className='product-info'>
                <p>{title}</p>
                <p className='Product-price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product-rating'>
                    {Array(rating).fill().map((_,i) =>(
                        <p key={i}><StarRateIcon /></p>
                    ))}
                </div>
            </div>
            <button onClick={addToBasket}>Add to Basket</button>
        </div>
    );
}

export default Product;
