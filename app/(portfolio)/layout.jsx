import { Jost } from 'next/font/google';
import '@/app/globals.css';
import { Animate } from '@/components/portfolio';

const jost = Jost({ subsets: ['latin'] });

export const metadata = {
  title: "Khaled Rashad's Portfolio",
  description: 'My personal portfolio website',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <Animate>
          <div className="max-w-7xl mx-auto flex w-screen min-h-screen flex-col justify-center relative bg-primary pb-20">
            {children}
          </div>
        </Animate>
      </body>
    </html>
  );
}
