import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ChangeLogWrapper from '../components/ChangeLogWrapper';

export default function ChangeLog() {
  return (
    <div className="large-container sm:px-6 sm:pt-6 sm:pb-24 px-4 pt-4">
      <Navbar />
      <div className="h-80 flex flex-col items-center pt-24">
        <div className="flex flex-col space-y-2 items-center">
          <h1 className="h1">Changelog</h1>
          <p className="p">Histórico de atualizações do Coop :)</p>
        </div>
      </div>
      <div className="w-full h-0.5 bg-gray-100 dark:bg-blackish2"></div>
      <div className="py-16">
        <ChangeLogWrapper />
      </div>
      <Footer />
    </div>
  );
}
