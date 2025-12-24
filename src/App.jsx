import { useState,useEffect, useContext } from 'react'
import './App.css'

import Routing from './assets/pages/Routing'
import { DataContext } from './assets/components/DataProvider/DataProvider'
import {auth} from './assets/Utility/firebase'
import { Type } from './assets/Utility/ActionType'

function App() {
  const [{user},dispatch] =useContext(DataContext)
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=>{
      if(authUser){
        dispatch({
          type:Type.SET_USER,
          user:authUser
        })
    }else{
      dispatch({
        type:Type.SET_USER,
        user:null
      })
    }
    })
  },[])
  return (
    <>
      <Routing/>
    </>
  )
}

export default App;
