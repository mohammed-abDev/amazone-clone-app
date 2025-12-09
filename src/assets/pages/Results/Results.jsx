import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import productUrl from '../../Api/endPoint';
import ProductCard from '../../components/Product/ProductCard';
import style from './Results.module.css'


function Results() {
    const {categoryname}=useParams();

    const [result,setResult] =useState([])

useEffect(()=>{
    axios.get(`${productUrl}/category/${categoryname}`)
    .then((res)=>{
        console.log(res)
        setResult(res.data)
    }).catch((error)=>{
        console.log("error during feach",error);
    })
},[categoryname])


  return (
    <LayOut>
        <div>
            {
                result.length ==0 ?(
                    <p>NO Product Found</p>
                ):(
                    <div className={style.Results}>
                    <p>{result.length} Product found</p>
                    <h4>category:{categoryname}</h4>
                    <hr />
                    <div className={style.Results_continer}>
                        {
                            result.map((resultProduct)=>(
                                <ProductCard
                                key={resultProduct.id}
                                productdata={resultProduct}
                                
                                />

                            ))
                        }
                    </div>
                    </div>
                    
                )
            }
        </div>
    </LayOut>
  );
}

export default Results
