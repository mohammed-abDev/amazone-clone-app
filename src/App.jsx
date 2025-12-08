import { useState } from 'react'
import './App.css'
import Header from './assets/components/Header/Header'
import MyCarousel from './assets/components/carousel/MyCarousel'
import CategoryList from './assets/components/category/CategoryList'
import Product from './assets/components/Product/Product'

function App() {
  

  return (
    <>
     <Header />
     <MyCarousel/>
     <CategoryList/>
     <Product/>
    </>
  )
}

export default App
