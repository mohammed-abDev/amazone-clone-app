import React from 'react'
import ReactDOM from "react-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import imgarr  from "./dataImg";
import style from './Mycarousel.module.css'

function MyCarousel() {
  return (
  <>
    <Carousel
    autoPlay={true}
    infiniteLoop={true}
    showIndicators={false}
    showThumbs={false}
    >
        {
            imgarr.map((hetoImg,index)=>{
                return(
                    <div key={index} className={style.hero_carasole_img}>
                        <img src={hetoImg} alt="hero img" className={style.carasole_img} />
                    </div>
                )
            })
        }
    </Carousel>
  </>
    );
}

export default MyCarousel
