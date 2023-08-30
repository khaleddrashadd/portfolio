import MainNav from './MainNav';
import MenuNav from './MenuNav';

const Navbar = () => {
  return (
    <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
      <div className="w-full md:w-880 bg-[#1d1e25] p-4 rounded-2xl flex items-center">
        <p className="text-lg text-slate-200 font-medium">Khaled Rashad</p>
        <MainNav />
        <MenuNav/>
      </div>
    </nav>
  );
};
export default Navbar;
