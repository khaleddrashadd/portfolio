import Link from 'next/link';
import { routes } from '@/data/portfolio/routes';

const MainNav = ({cv}) => {
  return (
    <div className="hidden md:flex items-center gap-6 ml-6 flex-1">
      {routes.map((route) => (
        <Link
          key={route.label}
          href={route.href}
          className="text-base text-textBase font-medium hover:text-slate-100 cursor-pointer transition">
          {route.label}
        </Link>
      ))}
      <Link
        href={cv||''}
        download="Example-PDF-document"
        target="_blank"
        rel="noreferrer"
        className="ml-auto text-base text-textBase font-medium hover:text-slate-100 cursor-pointer border border-textBase px-2 py-1 rounded-xl hover:border-gray-100 transition">
        Download CV
      </Link>
    </div>
  );
};
export default MainNav;
