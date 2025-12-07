import React from 'react'
import style from './Header.module.css'
import { FaLocationDot } from "react-icons/fa6";
import { MdAddShoppingCart } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import HeaderBelow from './HeaderBelow';


function Header() {
  return (
<>
    <header className={style.header_Container}>
        <div className={style.amazoneLogo_location}>
            <a href="">
                <img
                src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
                alt="amzone-logo"/>
            </a>

            <div className={style.location}>
                <a href="">
                    <small>deliver to</small>
                    <div className={style.delivery}>
                        <FaLocationDot />
                        <strong>Ethiopia</strong>
                    </div>
                </a>    
            </div>
            
        </div>

{/* Search Bar */}
        <div className={style.product_option_search}>
            <select name="" id="">
                <option value="">all</option>
                <option value="">toy</option>
                <option value="">baby</option>
            </select>

            <input type="text" placeholder="search" />

            <button className={style.searchBtn}><IoIosSearch size={25}/></button>
        </div>

{/* Right Side */}
        <div className={style.right_side}>
{/* Language */}
            <a className={style.Languge_option}>
                <img
                src='https://flagsapi.com/US/flat/32.png'
                alt="flag"
                />
                <select name="" id="">
                    <option value="">english</option>
                    <option value="">f</option>
                    <option value="">c</option>
                </select>
            </a>

    {/*Account */}
            <div className={style.account}>
                <a href="">
                    <small>Hello sin in</small>
                    <p><strong>account & Lists</strong></p>
                </a>
            </div>

    {/*order*/}
            <div className={style.order}>
                <a href="">
                    <small>Return</small>
                    <p><strong>& orders</strong></p>
                </a>
            </div>

    {/* cart */}
            <div className={style.cart}>
                <a href="">
                    {/* <img src="" alt="" /> */}
                    <CiShoppingCart size={40} />
                    <span>{0}</span>
                </a>
            </div>
        </div>
    </header>
    <HeaderBelow/>
</>    
  );
}

export default Header
