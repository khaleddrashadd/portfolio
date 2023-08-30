'use client';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button, Input } from '@/components/admin';

const RegisterForm = () => {
  const router = useRouter();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const name = data.name.value;
    const email = data.email.value;
    const password = data.password.value;
    toast.info('Registering...');

    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const userData = await res.json();
    if (!res.ok) return toast.error(userData || 'Something went wrong');
    toast.success('Registered successfully');
    router.replace('/admin');
  };
  return (
    <div className="flex mt-20 justify-center items-center overflow-y-auto overflow-x-hidden">
      <div className="w-full md:w-4/6 lg:3/6 xl:w-2/5 bg-[#28292e] rounded-xl">
        <form
          className="flex flex-col items-center justify-center gap-10 py-8 mt-8"
          onSubmit={handleSubmit}>
          <Input
            name="name"
            id="name"
            type="text"
            label="Name"
            className="text-neutral-700"
            disabled
          />
          <Input
            name="email"
            id="email"
            type="text"
            label="Email"
            className="text-neutral-700"
            disabled
          />
          <Input
            name="password"
            id="password"
            type="password"
            label="Password"
            className="font-extrabold text-xl"
            disabled
          />
          <Button
            variant="primary"
            label="Submit"
            disabled
          />
        </form>
      </div>
    </div>
  );
};
export default RegisterForm;
