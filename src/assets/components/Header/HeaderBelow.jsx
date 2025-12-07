import React from 'react'
import { IoMdMenu } from "react-icons/io";
import style from "./Header.module.css";

function HeaderBelow() {
  return (
    <div className={style.lower_catagory_container}>
        <ul>
            <li><a href=""><IoMdMenu/>All</a></li>
            <li><a href="">Today's Deals</a></li>
            <li><a href="">Prime Video</a></li>
            <li><a href="">Registr</a></li>
            <li><a href="">Gift Cards</a></li>
            <li><a href="">Customer Service</a></li>
            <li><a href="">Sell</a></li>
        </ul>
    </div>
  )
}

export default HeaderBelow
