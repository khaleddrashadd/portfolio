import { Jost } from 'next/font/google';
import { Navbar } from '@/components/admin';
import '@/app/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '@/lib/toast/Toast';

export const metadata = {
  title: "Khaled Rashad's Admin",
  description: 'portfolio admin page',
};

const jost = Jost({ subsets: ['latin'] });

export default function AdminLayout({ children }) {
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="max-w-7xl mx-auto bg-primary h-screen">
            <Navbar />
            <section className="h-full">
              {children}
              <Toast />
            </section>
        </div>
      </body>
    </html>
  );
}
