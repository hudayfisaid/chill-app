import AuthLayouts from "../../component/UI/Layouts/AuthLayouts";
import FormRegister from "../../component/UI/Fragments/FormRegister";

/**
 * Komponen `Index`
 * 
 * Komponen ini berfungsi sebagai halaman pendaftaran pengguna baru, 
 * yang menggabungkan layout otentikasi dengan formulir pendaftaran.
 */
const Index = () => {
  return (
    <AuthLayouts title="Daftar" description="Bergabunglah dengan kami!">
      {/* Menampilkan formulir pendaftaran di dalam layout otentikasi */}
      <FormRegister />
    </AuthLayouts>
  );
};

export default Index;
