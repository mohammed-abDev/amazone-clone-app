import React from 'react'
import style from './Category.module.css'
import { Link } from 'react-router-dom'



function Category({ data }) {
  return (
<section className={style.category_card_container}>
    <Link to={`/category/${data.name}`} className={style.category_card}>
        <div className={style.Category_card_content}>
            <h3>{data.title}</h3>
            <div className={style.catagory_card_img}>
                <img src={data.imageLink1} alt=""  width="100%" height="auto"/>
            </div>
            <small className={style.card_link}>{data.link}</small>
        </div>
    </Link>
</section>  
  )
}


export default Category
