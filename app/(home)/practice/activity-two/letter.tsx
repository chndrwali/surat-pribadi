'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { Separator } from '@/components/ui/separator';

interface LetterAnswers {
  salamPembuka: string;
  nomor: string;
  lampiran: string;
  perihal: string;
  tanggalSurat: string;
  jabatan: string;
  salamPenutup: string;
  kopSurat: string;
  tandaTangan: string;
  isiSurat: string;
  namaPengirim: string;
  [key: string]: string; // Add index signature
}

const correctAnswers: LetterAnswers = {
  salamPembuka: 'salam pembuka',
  nomor: 'nomor',
  lampiran: 'lampiran',
  perihal: 'perihal surat',
  tanggalSurat: 'tanggal surat',
  jabatan: 'jabatan',
  salamPenutup: 'salam penutup',
  kopSurat: 'kop surat',
  tandaTangan: 'tanda tangan',
  isiSurat: 'isi surat',
  namaPengirim: 'nama pengirim',
};

const pointValues: Record<string, number> = {
  salamPembuka: 9,
  nomor: 9,
  lampiran: 9,
  perihal: 9,
  tanggalSurat: 9,
  jabatan: 9,
  salamPenutup: 9,
  kopSurat: 9,
  tandaTangan: 9,
  isiSurat: 10, // One question gets 10 points to make the total exactly 100
  namaPengirim: 9,
};

export default function LetterComponents() {
  const router = useRouter();
  const [answers, setAnswers] = useState<Partial<LetterAnswers>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const isCorrect = (field: keyof LetterAnswers) => {
    return answers[field]?.toLowerCase() === correctAnswers[field]?.toLowerCase();
  };

  const areAllFieldsFilled = () => {
    const requiredFields = Object.keys(correctAnswers);
    return requiredFields.every((field) => answers[field] && answers[field].trim() !== '');
  };

  const handleSubmit = () => {
    if (!areAllFieldsFilled()) {
      toast('Semua bagian harus diisi terlebih dahulu!');
      return;
    }
    setSubmitted(true);

    // Calculate score - 10 points for each correct answer
    let totalScore = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if (answers[key]?.toLowerCase() === correctAnswers[key]?.toLowerCase()) {
        totalScore += pointValues[key] || 9;
      }
    });

    setScore(totalScore);
  };

  const getBorderClass = (field: keyof LetterAnswers) => {
    if (!answers[field]) return 'border-yellow-400';

    if (submitted) {
      return isCorrect(field) ? 'border-green-500' : 'border-red-500';
    } else {
      return 'border-yellow-400';
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Top Card */}
      <div className="relative bg-pink-100 rounded-lg p-6 mb-8 border-4 border-pink-200">
        <div className="absolute -top-2 left-0 right-0 bg-lime-200 rounded-t-lg p-2 text-center ">
          <h1 className="font-bold">Aktivitas 2</h1>
          Susunlah unsur-unsur surat dinas berikut kedalam bagian surat dinas
        </div>

        <div className="grid grid-cols-3 gap-4 mt-8 text-brown-800">
          <div className="space-y-2">
            <h3 className={`font-bold text-lg ${answers.salamPembuka ? 'text-green-600' : ''}`}>Salam Pembuka</h3>
            <h3 className={`font-bold text-lg ${answers.nomor ? 'text-green-600' : ''}`}>Nomor</h3>
            <h3 className={`font-bold text-lg ${answers.lampiran ? 'text-green-600' : ''}`}>Lampiran </h3>
            <h3 className={`font-bold text-lg ${answers.perihal ? 'text-green-600' : ''}`}>Perihal surat</h3>
            <h3 className={`font-bold text-lg ${answers.tanggalSurat ? 'text-green-600' : ''}`}>Tanggal Surat</h3>
            <h3 className={`font-bold text-lg ${answers.jabatan ? 'text-green-600' : ''}`}>Jabatan</h3>
          </div>
          <div className="space-y-2">
            <h3 className={`font-bold text-lg ${answers.salamPenutup ? 'text-green-600' : ''}`}>Salam Penutup</h3>
            <h3 className={`font-bold text-lg ${answers.kopSurat ? 'text-green-600' : ''}`}>Kop Surat</h3>
            <h3 className={`font-bold text-lg ${answers.tandaTangan ? 'text-green-600' : ''}`}>Tanda tangan</h3>
            <h3 className={`font-bold text-lg ${answers.isiSurat ? 'text-green-600' : ''}`}>Isi Surat</h3>
            <h3 className={`font-bold text-lg ${answers.namaPengirim ? 'text-green-600' : ''}`}>Nama Pengirim</h3>
          </div>
          <div className="w-full ">
            <div className="flex flex-col items-center justify-center space-y-2">
              Score
              <div className="bg-white  w-full max-w-[100px] p-4 rounded-lg border flex items-center justify-center">
                <span className="text-center">{score}</span>
              </div>
            </div>
            <div className="flex items-center justify-center my-4">
              <Button onClick={handleSubmit}>Submit</Button>
            </div>
            <div className="flex items-center justify-center mt-4 gap-2">
              <Button variant="outline" size="icon" onClick={() => router.back()}>
                <ChevronLeft className="h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => {
                  if (!submitted) {
                    toast.error('Silakan submit jawaban Anda terlebih dahulu!');
                    return;
                  }
                  router.push('/practice/activity-three/word');
                }}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Letter Form Layout */}
      <div className="relative bg-white rounded-lg p-6">
        {/* Purple Dots */}
        <div className="absolute left-4 top-0 bottom-0 flex flex-col gap-4">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="w-4 h-4 rounded-full bg-purple-300" />
          ))}
        </div>

        {/* Form Layout */}
        <div className="ml-12 grid gap-4">
          <Input className={`w-[280px] justify-self-center border-2 ${getBorderClass('kopSurat')}`} value={answers.kopSurat || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, kopSurat: e.target.value }))} disabled={submitted} />
          <Separator className="bg-black h-[3px]" />
          <Input className={`w-1/3 justify-self-end border-2 ${getBorderClass('tanggalSurat')}`} value={answers.tanggalSurat || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, tanggalSurat: e.target.value }))} disabled={submitted} />

          {/* Left Column */}
          <div className="grid gap-4">
            <Input className={`w-2/3 border-2 ${getBorderClass('nomor')}`} value={answers.nomor || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, nomor: e.target.value }))} disabled={submitted} />

            <Input className={`w-2/3 border-2 ${getBorderClass('lampiran')}`} value={answers.lampiran || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, lampiran: e.target.value }))} disabled={submitted} />

            <Input className={`w-2/3 border-2 ${getBorderClass('perihal')}`} value={answers.perihal || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, perihal: e.target.value }))} disabled={submitted} />
          </div>

          {/* Right Column - Aligned Right */}
          <div className="grid gap-4 justify-items-start">
            <Input className={`w-1/3 border-2 ${getBorderClass('salamPembuka')}`} value={answers.salamPembuka || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, salamPembuka: e.target.value }))} disabled={submitted} />
          </div>

          {/* Center Content */}
          <Input className={`w-full h-24 border-2 ${getBorderClass('isiSurat')}`} value={answers.isiSurat || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, isiSurat: e.target.value }))} disabled={submitted} />
          <Input className={`w-1/3 border-2 ${getBorderClass('salamPenutup')}`} value={answers.salamPenutup || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, salamPenutup: e.target.value }))} disabled={submitted} />

          {/* Bottom Right Section */}
          <div className="grid gap-4 justify-items-end">
            <Input className={`w-1/3 border-2 ${getBorderClass('jabatan')}`} value={answers.jabatan || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, jabatan: e.target.value }))} disabled={submitted} />
            <Input className={`w-1/3 border-2 ${getBorderClass('tandaTangan')}`} value={answers.tandaTangan || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, tandaTangan: e.target.value }))} disabled={submitted} />

            <Input className={`w-1/3 border-2 ${getBorderClass('namaPengirim')}`} value={answers.namaPengirim || ''} onChange={(e) => setAnswers((prev) => ({ ...prev, namaPengirim: e.target.value }))} disabled={submitted} />
          </div>
        </div>
      </div>
    </div>
  );
}
