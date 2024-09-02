/* eslint-disable no-unused-vars */
import React from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import SubscriptionBenefits from '../../component/UI/Fragments/SubscriptionBenefits';
import SubscriptionList from '../../component/UI/Fragments/SubscriptionList';

/**
 * Komponen `Index`
 * 
 * Komponen ini berfungsi sebagai halaman utama untuk menampilkan manfaat 
 * berlangganan dan daftar paket langganan yang tersedia. 
 */
const Index = () => {
  return (
    <>
      {/* Header bagian atas halaman */}
      <Header />
      
      {/* Menampilkan manfaat berlangganan */}
      <SubscriptionBenefits height="467px" />
      
      {/* Menampilkan daftar paket langganan */}
      <SubscriptionList />
      
      {/* Footer bagian bawah halaman */}
      <Footer />
    </>
  );
}

export default Index;


