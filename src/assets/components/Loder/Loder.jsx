import React from 'react'
import {FadeLoader} from 'react-spinners'
import style from './Loder.module.css'

function Loder() {
  return (
    <div className={style.loder_container}>
      <FadeLoader
        color="#086d5aff"
        height={30}
        width={7}
        radius={5}
        margin={5}
      />
    </div>
  );
}

export default Loder
