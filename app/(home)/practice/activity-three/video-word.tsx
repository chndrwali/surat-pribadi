import Image from 'next/image';

export const VideoWord = () => {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="relative mb-8 flex items-center gap-2">
        <Image src="/bg/ubur.png" alt="Mascot character" width={60} height={60} className="h-[60px] w-auto" />
        <h1 className="rounded-full bg-[#90c95b] px-6 py-2 text-xl font-bold text-white">AKTIVITAS 3</h1>
      </div>
      <h2 className="mb-6 text-center text-xl font-semibold text-gray-800">Simak Video dibawah ini</h2>

      {/* Laptop frame */}
      <div className="relative mx-auto w-full max-w-[900px]">
        <div className="relative z-10">
          {/* YouTube video */}
          <div className="absolute inset-[9%] top-[4%]">
            <div className="relative h-0 w-full pb-[56.25%]">
              <iframe
                className="absolute inset-0 h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/1MTyCvS05V4?start=0"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
