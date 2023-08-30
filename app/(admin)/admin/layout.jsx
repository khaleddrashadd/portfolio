import { Jost } from 'next/font/google';
import { currentUser } from '@/actions/getCurrentUser';
import { Navbar } from '@/components/admin';
import '@/app/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Toast from '@/lib/toast/Toast';

export const metadata = {
  title: "Khaled Rashad's Admin",
  description: 'portfolio admin page',
};

const jost = Jost({ subsets: ['latin'] });

export default async function AdminLayout({ children }) {
  const user = await currentUser();
  return (
    <html lang="en">
      <body className={jost.className}>
        <div className="max-w-7xl mx-auto md:w-880 ">
          <Navbar user={user} />
          <section className="h-full">
            {children}
            <Toast />
          </section>
        </div>
      </body>
    </html>
  );
}
