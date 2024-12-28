'use client';

import { ButtonNextPrevious } from '@/components/button-next-previous';
import { Inter } from 'next/font/google';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const CardContinues = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header section */}

        {/* Content Box */}
        <div className="bg-yellow-400 rounded-xl max-w-xs sm:max-w-xl shadow-lg border border-gray-800">
          <div className={`${inter.className} px-6 py-4 space-y-4 text-sm leading-relaxed`}>
            <p className="text-justify">
              {' '}
              Andi : &quot;Iya, biasanya ada beberapa bagian penting. Mulai dari tanggal, alamat pengirim, alamat penerima, salam pembuka, isi surat, sampai dengan salam penutup dan tanda tangan. Itu yang menjadikan surat resmi lebih
              terstruktur.&quot;
            </p>
            <p className="text-justify">Rina: &quot;Jadi, setiap bagian punya fungsinya sendiri, ya?&quot;</p>
            <p className="text-justify">
              Andi: &quot;Yup. Misalnya, salam pembuka penting untuk menunjukkan rasa hormat. Terus, bagian isi harus jelas, supaya pesan kita tidak disalahpahami. Sementara salam penutup biasanya dipakai untuk menunjukkan kesopanan dan
              penutupan pesan.&quot;
            </p>
            <p className="text-justify">Rina: &quot;Aku paham sekarang. Surat itu nggak cuma sekadar tulisan, tetapi ada aturan dan tujuannya. Maka, kita harus hati-hati dalam menulisnya, terutama menulis surat resmi.&quot;</p>

            <p className="text-justify">
              Andi: &quot;Benar, Rin. Lagipula, walaupun sekarang teknologi sudah canggih, menggunakan internet, dan kecerdasan buatan; surat masih sering dipakai, lho. Apalagi buat urusan-urusan penting seperti pekerjaan atau administrasi
              perkantoran.&quot;
            </p>

            <p className="text-justify">Rina: &quot;Wah, terima kasih penjelasannya, Andi. Sekarang aku tidak bingung lagi soal surat. Jadi tidak sabar ingin latihan membuat surat!&quot;</p>
            <p className="text-justify">Andi: &quot;Ayo kita latihan sama-sama supaya makin paham.&quot;</p>
          </div>
        </div>
        <div className="flex justify-between w-full max-w-lg mt-4">
          <ButtonNextPrevious onClick={() => router.back()} isLeft={true} />
          <ButtonNextPrevious onClick={() => router.push('/learning-materials/conclusion')} isLeft={false} />
        </div>
      </div>

      {/* Navigation Buttons */}
    </>
  );
};
