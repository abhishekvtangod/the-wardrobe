import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51HC1KNKV7GXtt3E4ziNoRAJNXkketoWCmpPL3WPWFb85WKaRQY0mOKVEq3Z7lIHUxEMun0ZusvVV42aS3YJpGblt00UPzVHYv2';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }

    return(
        <StripeCheckout
            label = 'PAY NOW'
            name = 'The Wardrobe Ltd.'
            billingAddress
            shippingAddress
            image = 'https://sendeyo.com/up/d/f3eb2117da'
            description = {`Your total is ₹${price}`}
            amount = {priceForStripe}
            panelLabel = 'Pay Now'
            token = {onToken}
            stripeKey = {publishableKey}

        />
    );

} 
export default StripeCheckoutButton;