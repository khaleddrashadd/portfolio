import { Jost } from 'next/font/google';
import './globals.css';
import { Animate, Navbar } from '@/components/portfolio';

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: "Khaled Rashad's Portfolio",
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        {/* <Animate> */}
          <div className="max-w-7xl mx-auto flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20">
            {/* <Navbar /> */}
            {children}
          </div>
        {/* </Animate> */}
      </body>
    </html>
  );
}
