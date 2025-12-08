import React from 'react'
import style from './Category.module.css'



function Category({ data }) {
  return (
<section className={style.category_card_container}>
    <a href='#' className={style.category_card}>
        <div className={style.Category_card_content}>
            <h3>{data.title}</h3>
            <div className={style.catagory_card_img}>
                <img src={data.imageLink1} alt=""  width="100%" height="auto"/>
                {/* <img src={data.imageLink2}alt="" width="100px" height="100px"/>
                <img src={data.imageLink3} alt="" width="100px" height="100px"/>
                <img src={data.imageLink4} alt="" width="100px" height="100px" /> */}
            </div>
            {/* <a href="">{data.link}</a> */}
            <small className={style.card_link}>Discover more for Holiday</small>
        </div>
       
    </a>
</section>  
  )
}


export default Category
