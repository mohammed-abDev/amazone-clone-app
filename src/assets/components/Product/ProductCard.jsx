import React from 'react'
import  Rating  from '@mui/material/Rating';
import CurrencyFormat from '../Currency/CurrencyFormat';
import style from '../Product/Product.module.css'

function producdataCard({productdata}) {
  return (
    <>
      <section className={style.product_Card}>
        <a href="">
          <img src={productdata.image} alt="" />
        </a>
        <h4>{productdata.title}</h4>
        <div className={style.rating}>
          <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
          <span>{productdata.rating.rate}</span>
        </div>
        <div className={style.amount}>
          <small>
            <CurrencyFormat amount={75.0} />
          </small>
        </div>
        <div className={style.btn}>
          <button>add to cart</button>
        </div>
      </section>
    </>
  );
}

export default producdataCard
