import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import productUrl from '../../Api/endPoint';
import ProductCard from '../../components/Product/ProductCard';
import style from './ProductDetail.module.css'
import Loder from '../../components/Loder/Loder';


function ProductDetail() {
const [productsfromId , SetProductsfromId] =useState([])
const [isLoding , setIsLoding] = useState(false);

  const { ProductId } = useParams();
useEffect(()=>{
  setIsLoding(true);

  axios.get(`${productUrl}/${ProductId}`)
  .then((res)=>{
    SetProductsfromId([res.data])
    // console.log([res.data]);
  }).catch((err)=>{
    console.log("Error fetching product:", err);
    
  }).finally (()=>{
    setIsLoding(false)
  })

},[ProductId])

  return (
    <LayOut>
      <div className={style.productDetailHeader}>Product Detail Page</div>

      <p className={style.categoryText}>
        Category: {productsfromId[0]?.category}
      </p>
      {isLoding ? (
        <Loder />
      ) : (
        <>
          <div className={style.single_Product_Detail_container}>
            {productsfromId.map((proFromId) => (
              <ProductCard
                key={proFromId.id}
                productdata={proFromId}
                flex={true}
                descriptionText={true}
                isbtn={true}
              />
            ))}
          </div>
        </>
      )}
    </LayOut>
  );
}

export default ProductDetail
