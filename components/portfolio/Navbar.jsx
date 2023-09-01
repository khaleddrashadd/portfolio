'use client';
// import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';
import MainNav from './MainNav';
import MenuNav from './MenuNav';

const Navbar = () => {
  const fetcher = (url) => fetch(url,{cache:"no-store"}).then((res) => res.json());
  const { data,isLoading } = useSWR('/api/bio', fetcher);
  // useEffect(() => {
  //   mutate();
  // }, [mutate]);

  if (isLoading) {
    return (
      <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
        <div className="w-full md:w-880 bg-[#1d1e25] p-4 rounded-2xl flex items-center">
          <Skeleton className="text-lg text-slate-200 font-medium" />
          <MainNav />
          <MenuNav />
        </div>
      </nav>
    );
  }

  return (
    <nav className="w-full px-6 z-50 fixed inset-x-0 top-2 flex justify-center items-center">
      <div className="w-full md:w-880 bg-[#1d1e25] p-4 rounded-2xl flex items-center">
        <p className="text-lg text-slate-200 font-medium">{data?.name}</p>
        <MainNav cv={data?.cv} />
        <MenuNav cv={data?.cv} />
      </div>
    </nav>
  );
};
export default Navbar;
