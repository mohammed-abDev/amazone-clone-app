import React, { useContext } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import product from '../../components/Product/Product'
import ProductCard from '../../components/Product/ProductCard'
import { DataContext } from '../../components/DataProvider/DataProvider'
import CurrencyFormat from '../../components/Currency/CurrencyFormat'
import { Link } from 'react-router-dom'
import style from './Cart.module.css'
import { Type } from '../../Utility/ActionType'
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrSubtractCircle } from "react-icons/gr";

function Cart() {
  const [state, dispatch] = useContext(DataContext);
  // console.log("mycart",state);
  const {Basket} = state;

  let TotallAmount = Basket.reduce((preAmout,CurrIteam)=>{
    return  preAmout + CurrIteam.price * CurrIteam.itemAmount
  },0)

  const incrment =(item)=>{
    dispatch({
      type:Type.ADD_TO_BASKET,
      item
    })
  }
   
  const dicrment = (id)=>{
    dispatch({
      type:Type.REMOVE_FROM_BASKET,
      id
    })
  }
  return (
    <LayOut>
      <section className={style.cart_container}>
        <div className={style.cart_container_iner}>
          {Basket.length === 0 ? (
            <>
              <h2 style={{ textAlign: "center" }}>Shopping Basket 🛒</h2>
              <div className={style.empty_cart_bg}></div>
              <div className={style.empty_cart_text}>
                <h3>
                  Opps! Your carts is <span>impity</span> 😒
                </h3>
                <i>You have no iteam in your shopping cart.</i>
                <i>Let's go add something</i>
                <Link to="/">Browse Products</Link>
              </div>
            </>
          ) : (
            <>
              <h2>Your Shopping Basket 🛒</h2>
              <h3>You have {Basket.length} item's ready to checkout</h3>
              <hr />
              {Basket.map((item) => (
                <section className={style.cart_product_item}>
                  <ProductCard
                    productdata={item}
                    key={item.id}
                    flex={true}
                    descriptionText={true}
                    isbtn={false}
                  />
                  <div className={style.cart_item_btn}>
                    <button onClick={()=>incrment(item)}><IoIosAddCircleOutline /></button>
                    <span>{item.itemAmount}</span>
                    <button onClick={()=>dicrment(item.id)}><GrSubtractCircle /></button>
                  </div>
                </section>
              ))}
            </>
          )}
        </div>

        {Basket.length !== 0 && (
          <div className={style.subtotal}>
            <div>
              <p>{Basket.length} iteam </p>
              <CurrencyFormat amount={TotallAmount} />
            </div>
            <span>
              <input type="checkbox" />
              <small>This order contains a gift</small>
            </span>
            <Link to="payments">Continue to checkout</Link>
          </div>
        )}
      </section>
    </LayOut>
  );
}

export default Cart
