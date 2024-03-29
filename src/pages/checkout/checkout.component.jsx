import React from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCartItems, selectCartItemsTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem  from '../../components/checkout-item/checkout-item.component';
import './checkout.styles.scss'
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

const CheckOutPage = ({cartItems, total}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
            
        </div>
        {
                cartItems.map(cartItem => 
                    (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>)    
                )
        }

        <div className='total'>
                <span>Total: ₹{total}</span>
        </div>
        <div class='test-warning'>
            *Please use the following test credit card for payments*
            <br/>
            42424 4242 4242 4242 
            <br/>
            Exp : 01/22
            <br/>
            CVV : 123
        </div>
        <StripeCheckoutButton price = {total}/>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems:selectCartItems,
    total: selectCartItemsTotal
})

export default connect(mapStateToProps)(CheckOutPage);