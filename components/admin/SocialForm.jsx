'use client';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { Button, Heading, Input } from '.';

const SocialForm = () => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: socialData, mutate } = useSWR('/api/social', fetcher);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const linkedin = data.linkedin.value;
    const github = data.github.value;
    const facebook = data.facebook.value;
    const x = data.x.value;
    const whatsapp = data.whatsapp.value;
    const email = data.email.value;

    if (!socialData) {
      const res = await fetch('/api/social', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ linkedin, facebook,email, github, x,whatsapp }),
      });
      if (!res.ok) return toast.error('Something went wrong');
      toast.success('Social media links created successfully');
      mutate();
      return;
    }
    const res = await fetch('/api/social', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ linkedin, facebook, github,email, x,whatsapp }),
    });
    if (!res.ok) return toast.error('Something went wrong');
    toast.success('Social media links updated successfully');
    mutate();
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-4">
        <Heading title="Social Media" />
        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit}>
          <Input
            label="Linkedin Url"
            type="url"
            className="text-gray-900"
            name="linkedin"
            defaultValue={socialData?.linkedin}
          />
          <Input
            label="Github Url"
            type="url"
            className="text-gray-900"
            name="github"
            defaultValue={socialData?.github}
          />
          <Input
            label="Facebook Url"
            type="url"
            className="text-gray-900"
            name="facebook"
            defaultValue={socialData?.facebook}
          />
          <Input
            label="X Url"
            type="url"
            className="text-gray-900"
            name="x"
            defaultValue={socialData?.x}
          />
          <Input
            label="Email Address"
            type="email"
            className="text-gray-900"
            name="email"
            defaultValue={socialData?.email}
          />
          <Input
            label="Whatsapp Number"
            type="text"
            className="text-gray-900"
            name="whatsapp"
            defaultValue={socialData?.whatsapp}
          />

          <Button
            variant="primary"
            label={socialData ? 'Update' : 'Create'}
          />
        </form>
      </div>
    </div>
  );
};
export default SocialForm;
