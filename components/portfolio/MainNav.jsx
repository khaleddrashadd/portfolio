import { routes } from '@/data/portfolio/routes';

const MainNav = () => {
  return (
    <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
      {routes.map((route) => (
        <a
          key={route.label}
          href={route.href}
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer transition">
          {route.label}
        </a>
      ))}
      <a
        href="#"
        className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 transition">
        Download CV
      </a>
    </div>
  );
};
export default MainNav;
