import React, { useState } from 'react'
import { useContext } from 'react';
import LayOut from '../../components/LayOut/LayOut'
import { DataContext } from "../../components/DataProvider/DataProvider";
import style from './Payment.module.css'
import  ProductCard  from "../../components/Product/ProductCard";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import CurrencyFormat from '../../components/Currency/CurrencyFormat';
import { axiosInstance } from '../../Api/axios';
import {ClipLoader} from 'react-spinners'
import { db } from '../../Utility/firebase';
import { doc, setDoc, collection } from "firebase/firestore";
import { useNavigate} from 'react-router-dom';
import { Type } from '../../Utility/ActionType';

function Payment() {
  const [{user ,Basket}, dispatch] = useContext(DataContext);
  const [Carderror,setCardError] = useState(null)
  const [processing, setProcessing] = useState(false)
  
  const stripe = useStripe();
  const elements = useElements();
  const navigate = useNavigate();
  

  const totallIteam = Basket?.reduce((amount, item) => {
    return amount + item.itemAmount;
  }, 0);

  let TotallAmount = Basket.reduce((preAmout, CurrIteam) => {
    return preAmout + CurrIteam.price * CurrIteam.itemAmount;
  }, 0);

    
    const handleChange = (e)=>{
      e?.error?.message ? setCardError(e.error.message) : setCardError("");
    };
    
    const handlePayment = async(e)=>{
      e.preventDefault();
      try {
        setProcessing(true)
        // 1, conect back-end || function to get client secret
        const response = await axiosInstance({
          method: "POST",
          url: `/payments/create?total=${TotallAmount}`,
        });

      console.log("clinit secret",response.data);
      const clinitSecret = response.data?.clientSecret;

      // 2, front-end [React confirmation]
      const {paymentIntent} = await stripe.confirmCardPayment(
        clinitSecret,
        {
          payment_method:{
            card:elements.getElement(CardElement)
          }
        }
      );
      console.log(paymentIntent);
      // 3, order firestore database save,clear basket
      await setDoc(
        doc(collection(db, "user", user.uid, "orders"), paymentIntent.id),
        {
          Basket,
          amount: paymentIntent.amount,
          created: paymentIntent.created,
        }
      );
      //EMPTY_BASKET
      dispatch({
        type:Type.EMPTY_BASKET
      })
      
      setProcessing(false)
      navigate("/order", { state: { msg: "you have placed new orders" } });
      } catch (error) {
        console.error("Payment error:", error);
        setProcessing(false);
        
      }
   
    }
  
  return (
    <LayOut>
      {/* header */}
      <div className={style.Payment_heder}>Checkout ({totallIteam}) items</div>
      {/* payment method */}
      <section className={style.payment}>
        {/* address */}
        <div className={style.flex}>
          <h3>DEliver Address</h3>
          <div>
            <div>{user?.email}</div>
            <div>123 React lane</div>
            <div>ethiopia</div>
          </div>
        </div>
        <hr />

        {/* product */}
        <div className={style.flex}>
          <h3>Reviw items and delivery</h3>
          <div>
            {Basket?.map((item) => (
              <ProductCard productdata={item} key={item.id} flex={true} />
            ))}
          </div>
        </div>
        <hr />

        {/* card form */}
        <div className={style.flex}>
          <h3>Payment methods</h3>
          <div className={style.payment_card_container}>
            <div className={style.payment_details}>
              <form onSubmit={handlePayment}>
                {/* errror */}
                {Carderror && (
                  <small style={{ color: "red" }}>
                    <i>{Carderror}</i>
                  </small>
                )}
                {/* CardElement */}
                <CardElement onChange={handleChange} />
                {/* price */}
                <div className={style.payment_price}>
                  <div>
                    <span style={{ display: "flex" ,gap:"10px"}}>
                      <p>Total order |</p>
                      <CurrencyFormat amount={TotallAmount} />
                    </span>
                  </div>
                  <button type="submit">
                    {
                      processing ? (
                        <div className={style.payment_loder}>
                          <ClipLoader size={15} color='#b3ababff'/>
                          <p>Please wait .....</p>
                        </div>
                      ):"Pay Now"
                    }
                    
                    </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Payment
