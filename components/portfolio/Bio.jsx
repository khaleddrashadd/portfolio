'use client';
import Image from 'next/image';
import Link from 'next/link';
import Skeleton from 'react-loading-skeleton';
import useSWR from 'swr';

const Bio = () => {
  const fetcher = (url) =>
    fetch(url, { cache: 'no-store' }).then((res) => res.json());
  const { data: userData, isLoading } = useSWR('/api/bio', fetcher);

  if (isLoading) {
    return (
      <section
        className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
        id="about">
        <div className="w-full h-420 flex items-center justify-center">
          <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
            <Skeleton className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl" />
          </div>
        </div>
        <div className="w-full h-420 flex flex-col items-center justify-center ">
          <Skeleton className="text-lg text-textBase text-center" />
          <Skeleton className="w-full md:w-auto mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80" />
        </div>
      </section>
    );
  }

  return (
    <section
      className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 my-24"
      id="about">
      <div className="w-full h-420 flex items-center justify-center">
        <div className="w-275 h-340 relative bg-emerald-200 rounded-md">
          <Image
            src={userData.imgUrl}
            alt="personal image"
            width={275}
            height={340}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="w-full h-full absolute -right-4 top-4 object-cover rounded-lg drop-shadow-2xl"
          />
        </div>
      </div>
      <div className="w-full h-420 flex flex-col items-center justify-center ">
        <p className="text-lg text-textBase text-center">{userData?.bio}</p>

        <button className="w-full md:w-auto mt-6 inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 hover:shadow-lg hover:shadow-teal-500/50 hover:dark:shadow-lg hover:dark:shadow-teal-800/80">
          <Link
            href={userData?.cv || ''}
            download="Example-PDF-document"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto px-5 py-2.5 transition bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
            Download
          </Link>
        </button>
      </div>
    </section>
  );
};
export default Bio;
