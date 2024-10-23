import Image from 'next/image'
import Link from 'next/link'

export default function RegisterSiswa() {
  return (
    <div className="flex max-h-screen 100">
      <div className="flex-1 flex flex-col px-6 py-5 lg:px-8">
        <div className="sm:mx-auto sm:w-full">
          <Image
            className=" h-14 w-auto"
            src="/Logosmk.svg"
            alt="TATA TERTIB Logo"
            width={40}
            height={40}
          />
          <h2 className="mt-5 text-center text-2xl font-semibold leading-9 tracking-tight text-gray-900">
            Daftar
          </h2>
          <p className=" text-center text-sm text-gray-600">
            Selamat datang di Website TaTib!
          </p>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <div>
                <input
                  id="nis"
                  name="nis"
                  type="text"
                  placeholder='NIS'
                  required
                  className="block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder='Nama Lengkap'
                  required
                  className="block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="class"
                  name="class"
                  type="text"
                  placeholder='Kelas'
                  required
                  className="block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  placeholder='Password'
                  required
                  className="block w-full rounded-md border-0 px-2 py-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="mt-10 flex w-full justify-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
              >
                Daftar
              </button>
            </div>
          </form>

          <p className="mt-5 text-center text-sm text-gray-500">
            Sudah punya akun?{' '}
            <Link href="/auth/login" className="font-semibold leading-6 text-blue-600 hover:text-blue-500">
              Masuk
            </Link>
          </p>
        </div>
      </div>
      <div className="hidden lg:block lg:w-1/2">
        <Image
          className="h-full w-full object-cover"
          src="/banner_sekolah.svg"
          alt="School building"
          width={1000}
          height={1000}
        />
      </div>
    </div>
  )
}