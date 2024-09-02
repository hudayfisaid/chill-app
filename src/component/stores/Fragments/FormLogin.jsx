/* eslint-disable no-unused-vars */
import React , { useState } from 'react'
import { Navigate } from "react-router-dom";
import googleIcon from '../../../assets/img/icon/google.png';
import InputForm from '../Elements/InputAuth';
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';
const FormLogin = () => {
 const [user, setUser] = useState(false)
 const submitHandler =  (e) => {
    e.preventDefault()
    setUser(true)
  }
  const authUser= () => {
    setUser(true)
  }
  return (
    <div>
      {user === true && (
            <Navigate to="/" replace={true} />
      )}
        <form onSubmit={submitHandler}>
            <InputForm
            htmlFor ="username"
            placeholder ="Masukkan username" 
            label = "Username"
            type = "text"
            isrequired = {true}
            />
            <InputForm
            htmlFor ="pasword"
            placeholder ="Masukkan kata sandi" 
            label = "Kata Sandi"
            type = "password"
            isrequired = {true}
            />
            <div className="flex justify-between items-center mb-4">
            <p className="font-lato text-sm text-gray-500">Belum punya akun? <Link to="/register" className="text-white">Daftar</Link></p>
            <a href="/" className="font-lato text-sm white">Lupa kata sandi?</a>
            </div>
            <Button btntype = "submit" variant ="bg-btn-gray" opacity="bg-opacity-50" hasLogo={null} >Masuk</Button>
        
            </form>
            <div className="text-center pt-2">

            <p className="font-lato text-gray-500">atau</p>
            </div>
            <Button btntype = "click" redirect = "/" variant ="bg-black" opacity="bg-opacity-0" hasLogo={[{img:googleIcon,alt:"Google Logo"}] }>Masuk dengan Google</Button>
        
    </div>
  )
}

export default FormLogin
