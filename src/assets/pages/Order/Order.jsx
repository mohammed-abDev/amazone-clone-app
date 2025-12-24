import React, { useContext, useEffect, useState } from "react";
import LayOut from "../../components/LayOut/LayOut";
import { db } from "../../Utility/firebase";
import { collection, doc, query, orderBy, onSnapshot } from "firebase/firestore";
import { DataContext } from "../../components/DataProvider/DataProvider";
import style from "./Order.module.css";
import ProductCard  from '../../components/Product/ProductCard';
import { Link } from "react-router-dom";

function Order() {
  const [{ user ,Basket}, dispatch] = useContext(DataContext);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
  if (user) {
    const ordersRef = collection(db, "user", user.uid, "orders");
    const q = query(ordersRef, orderBy("created", "desc"));

    onSnapshot(q, (snapshot) => {
      snapshot.docs.forEach((doc) => {
        console.log("snapsot",snapshot);
        setOrders(snapshot.docs.map((doc)=>({
          id:doc.id,
          data:doc.data()
        })))
      });
    });
  }else {
    setOrders([])
  }
}, [user]);
  return (
    <LayOut>
      <section className={style.order_container}>
        <div className={style.order_iner_container}>
          <h2>Your order</h2>
          {orders.length === 0 && (
            <>
              <h3 style={{ textAlign: "center" }}>
                You don't have any orders yet 🛒
              </h3>
              <div className={style.empty_order_bg}></div>
              <div className={style.empty_order_text}>
                <h3>
                  Oops! Your orders list is <span>empty</span> 😒
                </h3>
                <i>You haven't placed any orders yet.</i>
                <i>Start shopping and place your first order!</i>
                <Link to="/">Start Shopping</Link>
              </div>
            </>
          )}
          {/* oredrs item */}
          <div>
            {orders?.map((eachOrders, i) => {
              return (
                <div key={i}>
                  <p>order Id:{eachOrders.id}</p>
                  {eachOrders?.data?.Basket?.map((order) => (
                    <ProductCard
                      flex={true}
                      productdata={order}
                      key={order.id}
                    />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </LayOut>
  );
}

export default Order;
