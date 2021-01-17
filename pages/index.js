import Logo from '../components/atoms/Logo';
import Image from 'next/image';
import DarkModeButton from '../components/atoms/DarkModeButton';

export default function Home() {
  return (
    <div className="max-w-2xl m-auto sm:p-6 p-4 dark:bg-gray-900">
      <div className="flex justify-between">
        <Logo />
        <DarkModeButton />
      </div>
      <div className="flex flex-col space-y-4 items-center pt-8 sm:pt-20">
        <Image
          src="/static/hero-img.png"
          alt="Screenshot of the Coop app in a gray background"
          className=""
          width={800}
          height={400}
          priority
        />
        <div className="rounded-md p-2 hover:bg-gray-100 transition-all sm:w-2/4 w-full flex flex-col items-center dark:hover:bg-gray-800">
          <a href="" className="flex space-x-2 items-center">
            <svg
              className="w-3 h-3 fill-current text-gray-400"
              role="img"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Google icon</title>
              <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.345-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z" />
            </svg>
            <p className="text-sm text-gray-500">
              Disponível também na Google Play
            </p>
          </a>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 text-center dark:text-white">
          Gestão financeira com base na realidade.
        </h1>
        <p className="text-gray-700 text-md text-center max-w-lg dark:text-gray-500">
          Coop te ajuda a gerir sua realidade financeira. Você registra quanto
          de fato gastou em algo em comparação ao que esperava gastar.
        </p>
        <div className="flex sm:space-x-4 sm:flex-row sm:space-y-0 space-y-4 flex-col justify-center w-full">
          <button className="p-4 bg-blue-500 rounded-md shadow-md flex items-center space-x-2 hover:bg-blue-600 hover:shadow-lg transition-all justify-center">
            <p className="text-sm font-semibold text-white">Criar conta</p>
            <svg
              className="w-5 h-5 stroke-current text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
          <button className="p-4 bg-white border-2 border-blue-500 rounded-md shadow-md flex items-center space-x-2 hover:bg-blue-50 hover:shadow-lg transition-all justify-center dark:bg-gray-900 dark:hover:bg-gray-800">
            <p className="text-sm font-semibold text-blue-500 dark:text-white">
              Live Demo
            </p>
            <svg
              className="w-5 h-5 stroke-current text-blue-500 dark:text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
