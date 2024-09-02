import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments';
import CardThumbnail from '../../component/UI/Elements/Card/CardThumbnail';
import Header from '../../component/header';
import { useEffect } from 'react';
import Footer from '../../component/footer';
import useDaftarSayaStore from '../../component/stores/daftarsaya/useDaftarSayaStore';

/**
 * Komponen DaftarSaya
 * 
 * Komponen ini digunakan untuk menampilkan halaman "Daftar Saya", yaitu daftar film atau series 
 * yang telah ditambahkan pengguna. Menggunakan Zustand untuk mengelola state daftar film.
 */
const DaftarSaya = () => {
  // Mengambil data list daftar saya dari store Zustand
  const listdaftarsaya = useDaftarSayaStore(state => state.listdaftarsaya);

  // useEffect untuk logging daftar film ke console setiap kali listdaftarsaya berubah
  useEffect(() => {
    console.log(listdaftarsaya);
  }, [listdaftarsaya]);

  return (
    <div>
      {/* Header bagian atas halaman */}
      <Header />

      {/* Bagian Daftar Saya, menampilkan film yang ditambahkan pengguna */}
      <DaftarSayaFragments title="Daftar Saya">
        {listdaftarsaya.length > 0 ? (
          // Jika ada film dalam daftar, tampilkan menggunakan CardThumbnail
          listdaftarsaya.map((movie, index) => (
            <CardThumbnail key={index} {...movie} />
          ))
        ) : (
          // Jika tidak ada film dalam daftar, tampilkan pesan ini
          <p>Tidak ada film yang ditambahkan</p>
        )}
      </DaftarSayaFragments>

      {/* Footer bagian bawah halaman */}
      <Footer />
    </div>
  );
};

export default DaftarSaya;

