'use client';
import { signIn } from 'next-auth/react';
import { toast } from 'react-toastify';
import { Button, Input } from '@/components/admin';

const LoginForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const email = data.email.value;
    const password = data.password.value;
    toast.info('Login...');

    const res = await signIn('credentials', {
      email,
      password,
      redirect: false,
      callbackUrl: '/admin',
    });
    if (res.error) return toast.error(res.error || 'Something went wrong');
    toast.success('Signed-In successfully');
    window.location.replace('/admin');
  };
  return (
    <div className="flex mt-20 justify-center items-center overflow-y-auto overflow-x-hidden w-full">
      <div className="w-full md:w-4/6 lg:3/6 xl:w-2/5 bg-[#28292e] rounded-xl flex-1">
        <form
          className="flex flex-col items-center justify-center gap-10 py-8 mt-8"
          onSubmit={handleSubmit}>
          <Input
            name="email"
            id="email"
            type="text"
            label="Email"
            className="text-neutral-700"
          />
          <Input
            name="password"
            id="password"
            type="password"
            label="Password"
            className="font-extrabold text-xl"
          />
          <Button
            variant="primary"
            label="Submit"
          />
        </form>
      </div>
    </div>
  );
};
export default LoginForm;
