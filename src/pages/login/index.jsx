
import AuthLayouts from "../../component/UI/Layouts/AuthLayouts";
import FormLogin from "../../component/UI/Fragments/FormLogin";

/**
 * Komponen `Index`
 * 
 * Komponen ini berfungsi sebagai halaman login, menggabungkan layout otentikasi 
 * dengan formulir login.
 */
const Index = () => {
  return (
    <AuthLayouts title="Login" description="Datang kembali!">
      {/* Menampilkan formulir login di dalam layout otentikasi */}
      <FormLogin />
    </AuthLayouts>
  );
};

export default Index;

