import React, { useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckOutForm'
import './Cart.css'



import { connect } from 'react-redux'git 
var mapStateToProps = (state)=>{
    return { userinfo : state.user, carts : state.carts }
}
// add on git
//https://www.cluemediator.com/integrate-stripe-payment-gateway-in-react
//npm install --save @stripe/react-stripe-js @stripe/stripe-js
const stripePromise = loadStripe("pk_test_51H47bhGn0V8TkBtW76znkhJe871UyjlxKq6QUzwRkFzwXLGMkptXFViE2loGuWDjmZOeudddJn51CKUq6RFozr4X009E1WcTc8");

const successMessage = () => {
  return (
    <div className="success-msg">
      <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-check2" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
      </svg>
      <div className="title">Payment Successful</div>
    </div>
  )
}

const CartItem = (props) => {
  return <>
    <h4 className="d-flex justify-content-between align-items-center mb-3">
      <span className="text-muted">Your cart &nbsp;</span>
      <span className="badge bg-secondary badge-pill">{props.products.length}</span>
    </h4>

    <table className='table table-striped'>
      <thead>
        <tr>
          <th>S. No.</th>
          <th>Product</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {props.products.map((prod,index)=>{
          return <tr>
            <th>{index+1}</th>
            <th>{prod.prod_name}</th>
            <th>1</th>
            <th>{prod.prod_price}</th>
          </tr>
        })}
      </tbody>
    </table>
  </>
}

function Cart(props) 
{
  const [paymentCompleted, setPaymentCompleted] = useState(false);

  return (
      <div className='Cart'>
          <br/><br/><br/>
    <div className="container">
      <div className="py-5 text-center">
        <h2>Shopping Cart</h2>
      </div>
        <br/>
      <div className="row s-box">
        {paymentCompleted ? successMessage() : <React.Fragment>
          <div className="col-md-7 order-md-2 mb-4">
            <CartItem products={props.carts}/>
          </div>
          <div className="col-md-5 order-md-1">
            <Elements stripe={stripePromise}>
              <CheckoutForm amount={2000} setPaymentCompleted={setPaymentCompleted} />
            </Elements>
          </div>
        </React.Fragment>}
      </div>

    </div>
    </div>
  );
}

export default connect(mapStateToProps)(Cart);