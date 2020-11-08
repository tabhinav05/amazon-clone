import React, {useState, useEffect} from 'react'
import {Link, useHistory } from 'react-router-dom';

import CheckoutProduct from '../../components/CheckoutProduct/CheckoutProduct';
import { useStateValue } from "../../StateProvider";
import { CardElement, useStripe, useElements} from '@stripe/react-stripe-js'; 
import CurrencyFormat from 'react-currency-format';
import {getBasketTotal} from '../../reducer';
import axios from '../../components/axios/axios';

import './PaymentPage.css';




function PaymentPage() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const stripe = useStripe();
    const elements = useElements();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError ] = useState(null);
    const [disabled, setDisabled ] = useState(true);
    const [clientsecret, setClientSecret ] = useState(true);

    useEffect(() => {
        const getClientsecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create/totl=${getBasketTotal(basket) * 100 } `
            });
            setClientSecret(response.data.clientSecret)
        }

        getClientsecret();
    }, [basket])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);



        const payload = await stripe.confirmCardPayment(clientsecret, {payment_method: {
            card: elements.getElement(CardElement)
        }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null)
            setProcessing(false)

            history.replace('/orders')
        }) 
    }

    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error? event.error.message : "");   
    }

    return (
        <div className='payment'>
            <div className='payment-container'>
                <h1> Checkout (<Link className='heading' to='/checkout'>{basket?.length} items</Link>)</h1>

                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Delivey Address</h3>
                    </div>
                    <div className='payment-address'>
                        <p>{user?.email}</p>
                        <p>123 react js</p>
                        <p>Los Angeles, CA</p>
                    </div>
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Review items and delivey</h3>
                    </div>
                    <div className='payment-items'>
                        {basket.map(item =>(
                            <CheckoutProduct
                            id={item.id}
                            title={item.title}
                            image={item.image}
                            price={item.price}
                            rating={item.rating}
                            />
                        ))}
                    </div>
                        
                </div>
                <div className='payment-section'>
                    <div className='payment-title'>
                        <h3>Payment Method</h3>
                    </div>
                    <div classname='payment-details'>
                    <form onSubmit={handleSubmit}>
                       <CardElement onChange={handleChange}/>

                       <div className='payment-priceContainer'>
                           <CurrencyFormat 
                            renderText={(value) => (
                                   <h3>Order Total: {value}</h3>
                            )}
                            decimalScale={2}
                            value={getBasketTotal(basket)}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={"$"}
                           />
                           <button disabled={processing || disabled || succeeded}>
                               <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                           </button>
                       </div>
                       {error && <div>{error}</div>}
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PaymentPage
