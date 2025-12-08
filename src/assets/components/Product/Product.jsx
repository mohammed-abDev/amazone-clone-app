import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from './ProductCard';
import style from '../Product/Product.module.css'

function Product() {
    const [Product,SetProduct] =useState([])
    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res);
            SetProduct(res.data)
        })
    },[])
    console.log(Product);
  return (
    <section className={style.single_product_container}>
      {
        Product.map((singleProduct)=>{
          return <ProductCard productdata={singleProduct} key={singleProduct.id} />;
        })
      }
    </section>
  )
}

export default Product
