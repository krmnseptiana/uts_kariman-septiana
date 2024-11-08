import foto from "../man.png";

export default function Hero() {
    return(
        <div className="container mx-auto p-2 text-center">
      <h1 className="text-pink-500 font-bold">CV Online</h1>
      <h1 className="text-3x1">Kariman Septiana</h1>
      <Profile />
      <p>
      Saya adalah seorang Mahasiswa Universitas Ma'soem Semester 5 jurusan Sistem Informasi. Saya memiliki minat yang cukup dalam mengenai Teknologi, dan saya ingin mengembangkan minat saya tersebut. 
      </p>
    </div>
    );
}

function Profile() {
    return <img src={foto.src} alt="Kariman Septiana Profile" className="fotoku" />;
   }