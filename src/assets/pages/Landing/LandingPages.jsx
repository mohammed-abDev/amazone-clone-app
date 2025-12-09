import React from 'react'
import MyCarousel from '../../components/carousel/MyCarousel'
import CategoryList from '../../components/category/CategoryList'
import Product from '../../components/Product/Product'
import LayOut from '../../components/LayOut/LayOut'

function LandingPages() {
  return (
    <LayOut>
        <MyCarousel/>
        <CategoryList/>
        <Product/>
    </LayOut>
  )
}

export default LandingPages
