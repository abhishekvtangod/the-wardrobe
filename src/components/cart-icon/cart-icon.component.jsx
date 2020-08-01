import React from 'react';
import { connect } from 'react-redux';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import {selectCartItemsCount} from '../../redux/cart/cart.selectors';

import './cart-icon.component.scss';

const CartIcon = ({toggleCartHidden, itemCount}) => (
    <div className='cart-icon' onClick={toggleCartHidden}>
        <ShoppingIcon className='shopping-icon'/>
        <span className='item-count'>{ itemCount }</span>
    </div>
);


const mapDispatchToProp = dispatch => ({
    toggleCartHidden : () => dispatch(toggleCartHidden())
})



const mapStateToProp = state => ({
    // itemCount : cartItems.reduce((accumulatorQuantity, cartItem) => accumulatorQuantity + cartItem.quantity, 0)
    itemCount : selectCartItemsCount(state)
})

export default connect(
    mapStateToProp,
    mapDispatchToProp
)(CartIcon);
