import React, { useEffect, useState } from 'react'
import LayOut from '../../components/LayOut/LayOut'
import { useParams } from 'react-router-dom'
import axios from 'axios';
import productUrl from '../../Api/endPoint';
import ProductCard from '../../components/Product/ProductCard';
import style from './Results.module.css'
import Loder from '../../components/Loder/Loder';


function Results() {
    const {categoryname}=useParams();

    const [result,setResult] =useState([])
    const [isLoading,setIsLoading] =useState(false)

useEffect(()=>{
    setIsLoading(true)

    axios.get(`${productUrl}/category/${categoryname}`)
    .then((res)=>{
        console.log(res)
        setResult(res.data)
    }).catch((error)=>{
        console.log("error during feach",error);
    }).finally(()=>{
        setIsLoading(false)
    })
},[categoryname])


  return (
    <LayOut>
        <div>
            {
                isLoading ?(
                    <Loder/>
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
                                isbtn={true}
                                
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
