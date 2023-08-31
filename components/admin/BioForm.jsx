'use client';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { Button, Heading, Input } from '.';

const BioForm = () => {
  const [imgUrl, setImgUrl] = useState('');

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: bioData, mutate } = useSWR('api/bio', fetcher);

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
    const bio = data.bio.value;
    const cv = data.cv.value;
    const res = await fetch('api/bio', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ bio, cv, imgUrl }),
    });
    if (!res.ok) return toast.error('Something went wrong');
    toast.success('Bio updated successfully');
    mutate();
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-4">
        <Heading title="User" />
        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit}>
          <textarea
            className="w-full rounded-lg p-4 focus:outline-none border-2 focus:border-sky-400 text-black text-lg"
            rows="5"
            cols="10"
            placeholder="Bio"
            name="bio"
            defaultValue={bioData?.bio}
          />
          <Input
            label="CV Url"
            type="url"
            className="text-gray-900"
            name="cv"
            defaultValue={bioData?.cv}
          />

          <Input
            type="file"
            onChange={onChange}
            accept="image/*"
            name="image"
          />

          <Button
            variant="primary"
            label="Submit"
          />
        </form>
      </div>
      <div className="col-span-2 object-bottom mt-auto flex flex-col gap-4">
        <div className="w-full relative rounded-md overflow-hidden aspect-square">
          {(imgUrl||bioData?.imgUrl) && (
            <Image
              src={imgUrl || bioData?.imgUrl}
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
export default BioForm;
