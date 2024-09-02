/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import googleIcon from '../../../assets/img/icon/google.png';
import InputForm from '../Elements/InputAuth';
import Button from '../Elements/Button';
import { Link, Navigate } from 'react-router-dom';

/**
 * Komponen FormRegister
 * 
 * Komponen ini digunakan untuk menampilkan formulir pendaftaran akun baru. Pengguna dapat
 * mendaftarkan akun dengan memasukkan username dan kata sandi, serta memiliki opsi untuk
 * mendaftar menggunakan akun Google.
 */
const FormRegister = () => {
  const [user, setUser] = useState(false);

  // Fungsi untuk menangani submit form pendaftaran
  const submitHandler = (e) => {
    e.preventDefault();
    setUser(true); // Set status user menjadi true setelah form disubmit
  };

  // Fungsi untuk mengautentikasi pengguna (contoh)
  const authUser = () => {
    setUser(true); // Set status user menjadi true setelah autentikasi berhasil
  };

  return (
    <div>
      {/* Jika user sudah terdaftar, arahkan ke halaman utama */}
      {user && (
        <Navigate to="/" replace={true} />
      )}
      
      {/* Form pendaftaran */}
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

        {/* Input untuk konfirmasi kata sandi */}
        <InputForm
          htmlFor="confirmPassword"
          placeholder="Konfirmasi kata sandi" 
          label="Konfirmasi Kata Sandi"
          type="password"
          isrequired={true}
        />

        {/* Tautan untuk login jika sudah punya akun */}
        <div className="flex justify-between items-center mb-4">
          <p className="font-lato text-sm text-gray-500">
            Sudah punya akun? <Link to="/login" className="text-white">Masuk</Link>
          </p>
        </div>

        {/* Tombol submit untuk mendaftar */}
        <Button 
          btntype="submit" 
          variant="bg-btn-gray" 
          opacity="bg-opacity-50"
        >
          Daftar
        </Button>
      </form>

      {/* Opsi lain untuk mendaftar menggunakan Google */}
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
        Daftar dengan Google
      </Button>
    </div>
  );
};

export default FormRegister;
