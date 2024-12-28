'use client';

import { ButtonNextPrevious } from '@/components/button-next-previous';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] });

export const CardUnderstanding = () => {
  const router = useRouter();

  return (
    <>
      <div className="w-full flex flex-col items-center justify-center">
        {/* Header section */}
        <div className="relative w-full max-w-xs sm:max-w-xl">
          {/* Text at the top left */}
          <div className="flex flex-col space-y-2">
            <Image src="/icon/announcement.png" alt="" width={300} height={150} />
          </div>
        </div>

        {/* Content Box */}
        <div className="bg-yellow-400 rounded-xl max-w-xs sm:max-w-xl shadow-lg border border-gray-800">
          <div className={`${inter.className} px-6 py-4 space-y-4 text-xs sm:text-sm leading-relaxed`}>
            <p className="text-justify">Rina: &quot;Andi, guru tadi mengatakan bahwa kita harus belajar menulis surat. Tetapi sebenarnya, surat itu apa, sih? Kenapa surat penting untuk kita pelajari?&quot;</p>
            <p className="text-justify">
              Andi: &quot;Sederhana kok, Rin. Surat itu adalah alat komunikasi tertulis yang digunakan untuk menyampaikan pesan dari satu orang atau pihak ke pihak lain. Surat bisa bersifat pribadi, resmi, atau bisnis. Jadi, tergantung
              tujuannya.&quot;
            </p>
            <p className="text-justify">Rina: &quot;Oh, jadi seperti percakapan atau chat kita di WhatsApp, begitu ya? Kan kita juga saling berkirim pesan.&quot;</p>
            <p className="text-justify">
              Andi: &quot;Mirip, tetapi ada perbedaan besar. Percakapan di WhatsApp itu biasanya informal dan langsung, sedangkan surat mempunyai format dan aturan tertentu. Surat resmi harus rapi, berbahasa yang formal, dan disusun dengan
              urutan tertentu.&quot;
            </p>

            <p className="text-justify">Rina: &quot;Jadi surat itu lebih formal, ya? Kalau begitu, apa beda surat pribadi dan surat resmi?&quot;</p>

            <p className="text-justify">
              Andi: &quot;Betul, surat pribadi itu biasanya untuk teman atau keluarga, lebih santai, dan tidak terikat aturan baku. Kamu bisa menulis dengan gaya kamu sendiri. Sedangkan surat resmi biasanya untuk urusan yang lebih serius,
              seperti surat lamaran kerja, surat permohonan, atau surat undangan.&quot;
            </p>
            <p className="text-justify">Rina: &quot;Ohh, aku mulai ngerti sekarang. Surat resmi mempunyai struktur khusus, ya? Harus ada bagian-bagian yang jelas, begitu?&quot;</p>
          </div>
        </div>
        <div className=" flex justify-between w-full max-w-lg mt-4">
          <ButtonNextPrevious onClick={() => router.back()} isLeft={true} />
          <ButtonNextPrevious onClick={() => router.push('/learning-materials/understanding/continues')} isLeft={false} />
        </div>
      </div>

      {/* Navigation Buttons */}
    </>
  );
};
