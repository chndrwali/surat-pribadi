'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { HomeIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import axios from 'axios';
import { toast } from 'sonner';
import Image from 'next/image';

interface QuizQuestion {
  id: number;
  statement: string;
  correctAnswer: boolean;
}

const questions: QuizQuestion[] = [
  {
    id: 1,
    statement: 'Surat pribadi tidak diterapkan dengan kepala surat (kop surat)',
    correctAnswer: true,
  },
  {
    id: 2,
    statement: 'Surat dinas tidak memiliki nomor surat',
    correctAnswer: false,
  },
  {
    id: 3,
    statement: 'Surat pribadi memiliki nomor surat',
    correctAnswer: false,
  },
  {
    id: 4,
    statement: 'Surat dinas menggunakan bahasa baku dan resmi',
    correctAnswer: true,
  },
  {
    id: 5,
    statement: 'Surat dinas tidak memiliki lampiran',
    correctAnswer: false,
  },
];

export default function TrueFalseQuiz() {
  const [answers, setAnswers] = useState<Map<number, boolean>>(new Map());
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = (questionId: number, answer: boolean) => {
    if (!submitted) {
      setAnswers(new Map(answers.set(questionId, answer)));
    }
  };

  const handleSubmit = async () => {
    if (answers.size < questions.length) {
      alert('Silakan jawab semua pertanyaan terlebih dahulu!');
      return;
    }

    let correctAnswers = 0;
    questions.forEach((question) => {
      if (answers.get(question.id) === question.correctAnswer) {
        correctAnswers++;
      }
    });
    const finalScore = correctAnswers * 20;
    setScore(finalScore);
    setSubmitted(true);

    try {
      const response = await axios.post('/api/practice/activity-two', {
        activity_two: finalScore,
      });

      if (response.status === 200) {
        toast.success('Data berhasil disimpan');
      } else {
        toast.error('Gagal menyimpan data');
      }
    } catch (error) {
      console.error(error);
      toast.error('Terjadi kesalahan');
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Card className="hidden sm:block relative bg-green-100 p-6 mb-6">
        <HomeIcon className="absolute top-4 right-4 text-green-800 w-6 h-6" />
        <div className="flex items-start gap-4">
          <div className="w-12 h-12">
            <Image src="/placeholder.svg?height=48&width=48" alt="Cute octopus" className="w-full h-full object-contain" width={100} height={100} />
          </div>
          <div>
            <h2 className="text-xl font-bold text-green-800">AKTIVITAS 2</h2>
            <p className="text-green-700 mt-2">Centanglah pernyataan dibawah ini yang menurut mu benar</p>
          </div>
        </div>
      </Card>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="border-2 border-gray-300 bg-green-50 p-3 text-left">PERNYATAAN</th>
              <th className="border-2 border-gray-300 bg-green-50 p-3 text-center w-24">BENAR</th>
              <th className="border-2 border-gray-300 bg-green-50 p-3 text-center w-24">SALAH</th>
            </tr>
          </thead>
          <tbody>
            {questions.map((question) => (
              <tr key={question.id}>
                <td className="border-2 border-gray-300 p-3">{`${question.id}. ${question.statement}`}</td>
                <td className="border-2 border-gray-300 p-3 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-8 h-8 ${answers.get(question.id) === true ? 'bg-green-100 hover:bg-green-100' : ''} ${submitted && question.correctAnswer ? 'ring-2 ring-green-500' : ''}`}
                    onClick={() => handleAnswer(question.id, true)}
                    disabled={submitted}
                  >
                    ✓
                  </Button>
                </td>
                <td className="border-2 border-gray-300 p-3 text-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className={`w-8 h-8 ${answers.get(question.id) === false ? 'bg-red-100 hover:bg-red-100' : ''} ${submitted && !question.correctAnswer ? 'ring-2 ring-green-500' : ''}`}
                    onClick={() => handleAnswer(question.id, false)}
                    disabled={submitted}
                  >
                    ✗
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex gap-2">
            <Button variant="outline" size="icon">
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon">
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          <div className="flex items-center gap-4">
            {submitted && <div className="text-lg font-semibold">Skor: {score} / 100</div>}
            <Button onClick={handleSubmit} disabled={submitted} className="bg-green-600 hover:bg-green-700 text-white">
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}