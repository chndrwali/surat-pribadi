'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';

interface LetterAnswers {
  salamPembuka: string;
  nomor: string;
  lampiran: string;
  perihal: string;
  tanggalSurat: string;
  jabatan: string;
  salamPenutup: string;
  alamatTujuan: string;
  kopSurat: string;
  tandaTangan: string;
  isiSurat: string;
  namaPengirim: string;
  [key: string]: string; // Add index signature
}

const correctAnswers: LetterAnswers = {
  salamPembuka: 'Dengan hormat',
  nomor: '001/ABC/2024',
  lampiran: '1 berkas',
  perihal: 'Undangan Rapat',
  tanggalSurat: '23 Februari 2024',
  jabatan: 'Kepala Sekolah',
  salamPenutup: 'Hormat kami',
  alamatTujuan: 'SDN 1 Jakarta',
  kopSurat: 'DINAS PENDIDIKAN',
  tandaTangan: 'ttd',
  isiSurat: 'Dengan ini kami mengundang Bapak/Ibu untuk menghadiri rapat...',
  namaPengirim: 'Budi Santoso',
};

export default function LetterComponents() {
  const [answers, setAnswers] = useState<Partial<LetterAnswers>>({});

  const isCorrect = (field: keyof LetterAnswers) => {
    return answers[field]?.toLowerCase() === correctAnswers[field]?.toLowerCase();
  };

  return (
    <div className="max-w-4xl mx-auto">
      {/* Top Card */}
      <div className="relative bg-pink-100 rounded-lg p-6 mb-8 border-4 border-pink-200">
        <div className="absolute -top-2 left-0 right-0 bg-lime-200 rounded-t-lg p-3 text-center text-brown-800 font-bold">Susunlah unsur-unsur surat dinas berikut kedalam bagian surat dinas</div>

        <div className="grid grid-cols-2 gap-4 mt-8 text-brown-800">
          <div className="space-y-2">
            <h3 className={`font-bold text-lg ${isCorrect('salamPembuka') ? 'text-green-600' : ''}`}>Salam Pembuka</h3>
            <h3 className={`font-bold text-lg ${isCorrect('nomor') ? 'text-green-600' : ''}`}>Nomor</h3>
            <h3 className={`font-bold text-lg ${isCorrect('lampiran') ? 'text-green-600' : ''}`}>Lampiran dan</h3>
            <h3 className={`font-bold text-lg ${isCorrect('perihal') ? 'text-green-600' : ''}`}>Perihal surat</h3>
            <h3 className={`font-bold text-lg ${isCorrect('tanggalSurat') ? 'text-green-600' : ''}`}>Tanggal Surat</h3>
            <h3 className={`font-bold text-lg ${isCorrect('jabatan') ? 'text-green-600' : ''}`}>Jabatan</h3>
          </div>
          <div className="space-y-2">
            <h3 className={`font-bold text-lg ${isCorrect('salamPenutup') ? 'text-green-600' : ''}`}>Salam Penutup</h3>
            <h3 className={`font-bold text-lg ${isCorrect('alamatTujuan') ? 'text-green-600' : ''}`}>Alamat Tujuan</h3>
            <h3 className={`font-bold text-lg ${isCorrect('kopSurat') ? 'text-green-600' : ''}`}>Kop Surat</h3>
            <h3 className={`font-bold text-lg ${isCorrect('tandaTangan') ? 'text-green-600' : ''}`}>Tanda tangan</h3>
            <h3 className={`font-bold text-lg ${isCorrect('isiSurat') ? 'text-green-600' : ''}`}>Isi Surat</h3>
            <h3 className={`font-bold text-lg ${isCorrect('namaPengirim') ? 'text-green-600' : ''}`}>Nama Pengirim</h3>
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
          {/* Top Section */}
          <Input
            placeholder="Kop Surat"
            className={`w-1/3 justify-self-end border-2 ${answers.kopSurat ? (isCorrect('kopSurat') ? 'border-green-500' : 'border-yellow-400') : 'border-yellow-400'}`}
            value={answers.kopSurat || ''}
            onChange={(e) => setAnswers((prev) => ({ ...prev, kopSurat: e.target.value }))}
          />

          {/* Left Column */}
          <div className="grid gap-4">
            <Input
              placeholder="Nomor"
              className={`w-2/3 border-2 ${answers.nomor ? (isCorrect('nomor') ? 'border-green-500' : 'border-yellow-400') : 'border-yellow-400'}`}
              value={answers.nomor || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, nomor: e.target.value }))}
            />

            <Input
              placeholder="Lampiran"
              className={`w-2/3 border-2 ${answers.lampiran ? (isCorrect('lampiran') ? 'border-green-500' : 'border-yellow-400') : 'border-yellow-400'}`}
              value={answers.lampiran || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, lampiran: e.target.value }))}
            />

            <Input
              placeholder="Perihal"
              className={`w-2/3 border-2 ${answers.perihal ? (isCorrect('perihal') ? 'border-green-500' : 'border-yellow-400') : 'border-yellow-400'}`}
              value={answers.perihal || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, perihal: e.target.value }))}
            />
          </div>

          {/* Right Column - Aligned Right */}
          <div className="grid gap-4 justify-items-end">
            <Input
              placeholder="Alamat Tujuan"
              className={`w-1/3 border-2 ${answers.alamatTujuan ? (isCorrect('alamatTujuan') ? 'border-green-500' : 'border-yellow-400') : 'border-yellow-400'}`}
              value={answers.alamatTujuan || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, alamatTujuan: e.target.value }))}
            />
          </div>

          {/* Center Content */}
          <Input
            placeholder="Isi Surat"
            className={`w-full h-24 border-2 ${answers.isiSurat ? (isCorrect('isiSurat') ? 'border-green-500' : 'border-yellow-400') : 'border-yellow-400'}`}
            value={answers.isiSurat || ''}
            onChange={(e) => setAnswers((prev) => ({ ...prev, isiSurat: e.target.value }))}
          />

          {/* Bottom Right Section */}
          <div className="grid gap-4 justify-items-end">
            <Input
              placeholder="Tanda Tangan"
              className={`w-1/3 border-2 ${answers.tandaTangan ? (isCorrect('tandaTangan') ? 'border-green-500' : 'border-yellow-400') : 'border-yellow-400'}`}
              value={answers.tandaTangan || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, tandaTangan: e.target.value }))}
            />

            <Input
              placeholder="Nama Pengirim"
              className={`w-1/3 border-2 ${answers.namaPengirim ? (isCorrect('namaPengirim') ? 'border-green-500' : 'border-yellow-400') : 'border-yellow-400'}`}
              value={answers.namaPengirim || ''}
              onChange={(e) => setAnswers((prev) => ({ ...prev, namaPengirim: e.target.value }))}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
