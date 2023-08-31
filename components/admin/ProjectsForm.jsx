'use client';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { Button, Heading, Input } from '.';

const ProjectsForm = ({ data: formData }) => {
  const router = useRouter();

  const [imgUrl, setImgUrl] = useState('');

  const onChange = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = (e) => {
      setImgUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  const onRemove = () => {
    setImgUrl('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const name = data.name.value;
    const description = data.description.value;
    const url = data.url.value;
    if (!formData) {
      const res = await fetch('/api/projects', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, description, url, imgUrl }),
      });
      if (!res.ok) return toast.error('Something went wrong');
      toast.success('Project Created successfully');
      router.refresh();
      return;
    }

    const res = await fetch(`/api/projects/${formData?.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, url, imgUrl }),
    });
    if (!res.ok) return toast.error('Something went wrong');
    toast.success('Project Updated successfully');
    router.refresh();
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-4">
        <Heading title="Projects" />
        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit}>
          <textarea
            className="w-full rounded-lg p-4 focus:outline-none border-2 focus:border-sky-400 text-black text-lg"
            rows="5"
            cols="10"
            placeholder="Description"
            name="description"
            defaultValue={formData?.description || ''}
          />
          <Input
            label="Project Name"
            type="text"
            className="text-gray-900"
            name="name"
            defaultValue={formData?.name || ''}
          />
          <Input
            label="Project Url"
            type="url"
            className="text-gray-900"
            name="url"
            defaultValue={formData?.url || ''}
          />

          <Input
            type="file"
            onChange={onChange}
            accept="image/*"
            name="image"
          />

          <Button
            variant="primary"
            label={formData ? 'Update' : 'Create'}
          />
        </form>
      </div>
      <div className="col-span-2 object-bottom mt-auto flex flex-col gap-4">
        <div className="w-full relative rounded-md overflow-hidden aspect-square">
          {(imgUrl || formData?.imgUrl) && (
            <Image
              src={imgUrl || formData?.imgUrl}
              alt="personal photo"
              fill
              className="rounded-md"
            />
          )}
        </div>
        {imgUrl && (
          <Button
            label="Delete"
            variant="danger"
            onClick={onRemove}
          />
        )}
      </div>
    </div>
  );
};
export default ProjectsForm;
