import { Jost } from 'next/font/google';
import '@/app/globals.css';
import { SplineModel } from '@/components/portfolio';
import 'react-loading-skeleton/dist/skeleton.css';

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: "Khaled Rashad's Portfolio",
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <SplineModel />
        <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
          {children}
        </div>
      </body>
    </html>
  );
}
