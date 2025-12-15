import React, { createContext, useContext } from 'react'
import  Rating  from '@mui/material/Rating';
import CurrencyFormat from '../Currency/CurrencyFormat';
import style from '../Product/Product.module.css'
import { Link } from 'react-router-dom';
import { DataContext} from '../DataProvider/DataProvider';
import { Type } from '../../Utility/ActionType';

function producdataCard({ productdata, flex, descriptionText ,isbtn}) {

   const { image, title,description,id,rating,price } = productdata;
  

      const [state,dispatch] =useContext(DataContext);
      console.log(state)
      const addToCard =()=>{
        dispatch({
          type:Type.ADD_TO_BASKET,
          item:{

            image, title,description,id,rating,price 

          }
        }
        )
      }


  return (
    <>
      <section
        className={`${style.product_Card} ${flex ? style.flex_container : ""}`}
      >
        <Link to={`products/${id}`}>
          <img src={image} alt="" />
        </Link>
        <div className={style.card_content}>
          <h4>{title}</h4>

          {descriptionText &&
          <p className={style.descriptionText}>
            {description}
          </p>}

          <div className={style.rating}>
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <span>{rating.rate}</span>
          </div>
          <div className={style.amount}>
            <small>
              <CurrencyFormat amount={price} />
            </small>
          </div>
          <div className={style.btn} >
            {
            isbtn && <button onClick={addToCard}>add to cart</button>
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default producdataCard
