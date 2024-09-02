/* eslint-disable react/prop-types */

/**
 * Komponen DaftarSayaFragments
 * 
 * Komponen ini berfungsi sebagai wadah untuk menampilkan koleksi item 
 * (komponen anak) dengan judul. Komponen ini memberikan bagian yang sudah 
 * diberi gaya untuk menampilkan konten seperti daftar film atau serial di bagian "Daftar Saya".
 */
const DaftarSayaFragments = ({ children, title }) => {
  return (
    <div className="w-full p-5 flex flex-col justify-center items-center bg-[#181A1C] text-white py-11">
      
      {/* Kontainer untuk judul dan komponen anak */}
      <div className="w-[90%]">
        
        {/* Judul bagian */}
        <h1 className="text-2xl font-bold mb-5 text-left">{title}</h1>
        
        {/* Kontainer untuk komponen anak */}
        <div className="flex flex-wrap justify-center gap-5">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DaftarSayaFragments;
