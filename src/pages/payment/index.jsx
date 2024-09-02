/* eslint-disable no-unused-vars */
import React from 'react';
import PaymentSummary from '../../component/UI/Fragments/PaymentSummaryFragments';
import Header from '../../component/header';
import Footer from '../../component/footer';

/**
 * Komponen `Index`
 * 
 * Komponen ini berfungsi sebagai halaman ringkasan pembayaran, 
 * yang menampilkan informasi pembayaran, metode pembayaran, dan total transaksi.
 */
const Index = () => {
  return (
    <>
      {/* Header bagian atas halaman */}
      <Header />

      {/* Menampilkan ringkasan pembayaran */}
      <PaymentSummary />

      {/* Footer bagian bawah halaman */}
      <Footer />
    </>
  );
}

export default Index;
