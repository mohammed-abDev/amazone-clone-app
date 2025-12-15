import React, { useEffect, useState } from 'react'
import axios from "axios";
import ProductCard from './ProductCard';
import style from '../Product/Product.module.css'
import Loder from '../Loder/Loder';

function Product() {
    const [Product,SetProduct] =useState([])
    const [isLoading , setIsLoading] = useState(false)
    useEffect(()=>{
      setIsLoading(true)

        axios.get("https://fakestoreapi.com/products")
        .then((res)=>{
            console.log(res);
            SetProduct(res.data)
        }).catch((err)=>{
          console.log("Error fetching product:", err);
        }).finally(()=>{
          setIsLoading(false)
        })
    },[])
    console.log(Product);
  return (
    
    <>
    {
      isLoading ? (<Loder/>) : (
        
        <section className={style.single_product_container}>
          {
            Product.map((singleProduct)=>{
              return (
                <ProductCard
                  productdata={singleProduct}
                  key={singleProduct.id}
                  isbtn={true}
                />
              );
            })
          }
        </section>
      )
    }
    </>
  )
}

export default Product
