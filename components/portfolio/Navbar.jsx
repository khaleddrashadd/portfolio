import MainNav from './MainNav';
import MenuNav from './MenuNav';

const Navbar = ({ cv, name }) => {
  return (
    <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
      <div className="w-full md:w-880 bg-[#1d1e25] p-4 rounded-2xl flex items-center">
        <p className="text-lg text-slate-200 font-medium">{name}</p>
        <MainNav cv={cv} />
        <MenuNav cv={cv} />
      </div>
    </nav>
  );
};
export default Navbar;
