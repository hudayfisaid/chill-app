/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Logonya from '../Elements/logo';
import BgImage from '../../../assets/img/bg/bg-masuk.jpeg';

/**
 * Komponen AuthLayouts
 * 
 * Komponen ini digunakan sebagai layout umum untuk halaman otentikasi seperti login dan register.
 * Ini mencakup latar belakang bergambar, logo di bagian atas, serta judul dan deskripsi yang diberikan
 * melalui props.
 */
const AuthLayouts = (props) => {
  // Destructuring props untuk mendapatkan children, title, dan description
  const { children, title, description } = props;

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${BgImage})` }}  // Menggunakan gambar sebagai background
    >
      <div className="bg-bg-gray bg-opacity-80 p-8 rounded-lg max-w-md w-full text-white">
        
        {/* Bagian untuk logo, judul, dan deskripsi */}
        <div className="text-center mb-6">
          <Logonya height="h-[50px]" width="w-[50px]" center={true} />  {/* Perbaikan typo pada `width` */}
          <h1 className="text-2xl font-bold mt-4 font-lato">{title}</h1>  {/* Perbaikan weight-700 menjadi font-bold */}
          <p className="font-lato">{description}</p>
        </div>

        {/* Children akan berisi konten tambahan yang dimasukkan dari komponen lain */}
        {children}
      </div>
      
    </div>
  );
};

export default AuthLayouts;
