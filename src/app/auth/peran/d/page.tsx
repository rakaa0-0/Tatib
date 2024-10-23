import Image from "next/image";

export default function PeranD() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4">
      <header className="w-full mb-6">
        <Image
          src="/Logosmk.svg"
          alt="Logo"
          width={200}
          height={100}
          className="mr-2"
        />
      </header>

      <main className="w-full max-w-md bg-white rounded-lg shadow-md p-20">
        <h2 className="text-center text-xl font-semibold mb-6 text-blue-600">
          Pilih Peran Anda :
        </h2>

        <div className="flex justify-center space-x-8 mb-8">
          <div className="flex flex-col p-3 items-center rounded-lg border-2 border-gray-300">
            <div className="w-25 h-25  flex items-center justify-center mb-1">
              <img src="/peran/non/peransiswa.svg" alt="" />
            </div>
            <span className="text-sm font-medium">Siswa</span>
          </div>

          <div className="flex flex-col p-3 items-center rounded-lg border-2 border-gray-300">
            <div className="w-25 h-25  flex items-center justify-center mb-1">
             <img src="/peran/non/peranguru.svg" alt="" />
            </div>
            <span className="text-sm font-medium">Guru</span>
          </div>
        </div>

        <div className="flex justify-center"></div>
      </main>
    </div>
  );
}
