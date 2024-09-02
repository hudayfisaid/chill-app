/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { Navigate } from "react-router-dom";
import googleIcon from '../../../assets/img/icon/google.png';
import InputForm from '../Elements/InputAuth';
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';

/**
 * Komponen FormLogin
 * 
 * Komponen ini digunakan untuk menampilkan formulir login, termasuk input username, kata sandi,
 * dan opsi untuk login menggunakan Google. Setelah berhasil login, pengguna akan diarahkan ke halaman utama.
 */
const FormLogin = () => {
  const [user, setUser] = useState(false);

  // Fungsi untuk menangani submit form login
  const submitHandler = (e) => {
    e.preventDefault();
    setUser(true); // Set status user menjadi true setelah submit
  };

  // Fungsi untuk mengautentikasi pengguna (contoh)
  const authUser = () => {
    setUser(true); // Set status user menjadi true setelah autentikasi berhasil
  };

  return (
    <div>
      {/* Jika user sudah login, arahkan ke halaman utama */}
      {user && (
        <Navigate to="/" replace={true} />
      )}
      
      {/* Form login */}
      <form onSubmit={submitHandler}>
        {/* Input untuk username */}
        <InputForm
          htmlFor="username"
          placeholder="Masukkan username" 
          label="Username"
          type="text"
          isrequired={true}
        />

        {/* Input untuk kata sandi */}
        <InputForm
          htmlFor="password"
          placeholder="Masukkan kata sandi" 
          label="Kata Sandi"
          type="password"
          isrequired={true}
        />

        {/* Tautan untuk pendaftaran dan lupa kata sandi */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-lato text-sm text-gray-500">
            Belum punya akun? <Link to="/register" className="text-white">Daftar</Link>
          </p>
          <Link to="/forgot-password" className="font-lato text-sm text-white">Lupa kata sandi?</Link>
        </div>

        {/* Tombol submit untuk login */}
        <Button 
          btntype="submit" 
          variant="bg-btn-gray" 
          opacity="bg-opacity-50"
        >
          Masuk
        </Button>
      </form>

      {/* Opsi lain untuk login menggunakan Google */}
      <div className="text-center pt-2">
        <p className="font-lato text-gray-500">atau</p>
      </div>
      <Button 
        btntype="button" 
        redirect="/" 
        variant="bg-black" 
        opacity="bg-opacity-0" 
        hasLogo={[{ img: googleIcon, alt: "Google Logo" }]}
      >
        Masuk dengan Google
      </Button>
    </div>
  );
};

export default FormLogin;
