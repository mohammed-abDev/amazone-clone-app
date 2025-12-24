import React, { useContext, useState } from 'react'
import style from './SignUp.module.css'
import { Link,useNavigate,useLocation} from 'react-router-dom';
import { auth } from '../../Utility/firebase';
//for sign-in and sign-up
import {signInWithEmailAndPassword} from 'firebase/auth'
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { DataContext } from '../../components/DataProvider/DataProvider';
import { Type } from '../../Utility/ActionType';
//
import {ClipLoader} from 'react-spinners'

function Auth() {
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [error,setError] = useState("")
  const [Loading,setLoading] = useState({
    signIn : false,
    signUp : false,
  })
  
  const naveStateData = useLocation();
    console.log(naveStateData);
  const naviatToHome = useNavigate()
  // console.log(email,password);
  // console.log(error);
  
  const [{user} , dispatch] = useContext(DataContext)
  // console.log(user);

  const authHandler = async(events)=>{
    events.preventDefault();
    // console.log(events.target.name);
    if(events.target.name == "signIn"){
      setLoading({...Loading,signIn : true})

      signInWithEmailAndPassword(auth, email, password)
        .then((userInfo) => {
          // console.log(userInfo)
          dispatch({
            type: Type.SET_USER,
            user: userInfo.user,
          });
          setLoading({ ...Loading, signIn: false });
          naviatToHome(naveStateData?.state.redirect || "/")
        })
        .catch((err) => setError(err.message))
        .finally(() => setLoading({ ...Loading, signIn: false }));

    }else{
      setLoading({...Loading,signUp :true})
      createUserWithEmailAndPassword(auth,email,password).then((userInfo)=>{
        // console.log(userInfo)
        dispatch({
          type:Type.SET_USER,
          user:userInfo.user,
        })
        setLoading({...Loading,signUp : false})
        naviatToHome("/");
      })
      .catch((err) => err.message)
      .finally(() => setLoading({...Loading , signUp :false}))
    }
  }
  return (
    <section className={style.auth__container}>
      {/* Logo */}
      <div className={style.auth__logo}>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/small/amazon_PNG3.png"
            alt="amazon-logo"
          />
        </Link>
      </div>

      {/* Form */}
      <form className={style.auth__form}>
        {
          naveStateData?.state?.msg &&(
            <small style={{
              color:"red",
              textAlign:"center",
              padding:"3px",
            }}>
              <i>{naveStateData?.state?.msg}</i>
            </small>
          )
        }
        <h3 className={style.auth__title}>Sign in or create account</h3>
        <i id={style.error_message}>{error}</i>
        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          onChange={(events) => setEmail(events.target.value)}
        />

        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(events) => setPassword(events.target.value)}
        />

        <button
          onClick={authHandler}
          name="signIn"
          type="submit"
          className={style.sign_in__button}
        >
          {Loading.signIn ? <ClipLoader size={15} color='#fff'/> : "Sign in"}
        </button>

        <small>
          By continuing, you agree to Amazon's
          <br />
          <a href="">Conditions of Use</a> and
          <a href="">Privacy Notice</a>.
        </small>

        <button
          onClick={authHandler}
          name="signUp"
          type="submit"
          className={style.sign_up__button}
        >
          {Loading.signUp ? <ClipLoader size={15}/> : "Sign up"}
        </button>

        <small>
          <a href="">Need help?</a>
        </small>

        <hr />

        <p>Buying for work?</p>
        <a href="">Create a free business account</a>
      </form>

      <span className={style.border}></span>

      {/* Footer */}
      <div className={style.auth__bottom}>
        <div className={style.auth__bottom__links}>
          <a href="">Conditions of Use</a>
          <a href="">Privacy Notice</a>
          <a href="">Help</a>
        </div>
        <small>© 1996–2025, Amazon.com, Inc. or its affiliates</small>
      </div>
    </section>
  );
}

export default Auth
