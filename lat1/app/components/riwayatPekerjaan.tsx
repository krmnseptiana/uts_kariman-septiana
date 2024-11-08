export default function RiwayatPekerjaan() {
    return(
<div className="container mx-auto p-2 text-center pt-20">
        <h2 className="text-2xl sm:text-3xl mb-8">Riwayat Pekerjaan</h2>
        <RowRiwayatPekerjaan tahun="2020 - sekarang" instansi="Oriental EgonGota" jabatan="Proplayer Amatir Mobile Legend"/>
        <RowRiwayatPekerjaan tahun="2022" instansi="Apotek Al Masoem Dandeur" jabatan="karyawan"/>
        <RowRiwayatPekerjaan tahun="2024" instansi="Tempat Praktek Dokter Mandiri Candra Permana" jabatan="Admin"/>
        <RowRiwayatPekerjaan tahun="2024" instansi="Flowluxe" jabatan="Admin Store"/>
      </div>
    );
}

interface RowRiwayatPekerjaanProps {
    tahun: string;
    instansi: string;
    jabatan: string;
   }

   function RowRiwayatPekerjaan(props: RowRiwayatPekerjaanProps) {
    return (
      <div className="border-2 border-black-500/75 rounded-lg bg-pink-800 p-4 mb-6">
           <div className="container mx-auto">
            <div className="grid grid-cols-12 gap-2">
              <div className="col-span-12 md:col-span-4 font-bold text-lg">{props.tahun}</div>
              <div className="col-span-12 md:col-span-4">{props.instansi}</div>
              <div className="col-span-12 md:col-span-4">{props.jabatan}</div>
            </div>
          </div>
          </div>
    );
   }