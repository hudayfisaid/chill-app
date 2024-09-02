import Header from '../../component/header';
import Footer from '../../component/footer';
import FormProfile from '../../component/UI/Fragments/FormProfile';
import DaftarSayaFragments from '../../component/UI/Fragments/DaftarSayaFragments';
import daftarSaya from '../../component/constants/daftarSaya';
import CardThumbnail from '../../component/UI/Elements/Card/CardThumbnail';

/**
 * Komponen Profile
 * 
 * Komponen ini digunakan untuk menampilkan halaman profil pengguna, yang mencakup
 * informasi profil dan daftar tontonan favorit (Daftar Saya).
 */
const Profile = () => {
  return (
    <>
      {/* Header bagian atas halaman */}
      <Header />

      {/* Formulir profil pengguna */}
      <FormProfile height="h-[850px]" title="Profile Saya" />

      {/* Bagian Daftar Saya, menampilkan maksimal 6 item */}
      <DaftarSayaFragments title="Daftar Saya">
        {daftarSaya.slice(0, 6).map((movie, index) => (
          <CardThumbnail key={index} {...movie} ignore={true} />
        ))}
      </DaftarSayaFragments>

      {/* Footer bagian bawah halaman */}
      <Footer />
    </>
  );
};

export default Profile;
