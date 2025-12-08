import React from 'react'
import productInfo from "./CategoryProduct";
import Category from "./Category";
import style from '../category/Category.module.css'

function CategoryList() {
  return (
    <div className={style.category_card_row}>
      {productInfo.map((Item,index) => (
        <Category data={Item} key={index}/>
      ))}
    </div>
  );
}

export default CategoryList
