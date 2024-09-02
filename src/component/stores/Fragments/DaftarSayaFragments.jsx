/* eslint-disable react/prop-types */
 
const DaftarSayaFragments = ({children, title}) => {
    return (
        <div className="w-full p-5 flex flex-col justify-center items-center bg-[#181A1C] text-white py-11">
        <div className="w-[90%]">
          <h1 className="text-2xl font-bold mb-5 text-left">{title}</h1>
          <div className="flex flex-wrap justify-center gap-5">
            {children}
          </div>
        </div>
      </div>
    );
};

export default DaftarSayaFragments;