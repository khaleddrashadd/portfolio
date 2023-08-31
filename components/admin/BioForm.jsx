'use client';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
import useSWR from 'swr';
import { Button, Heading, Input } from '.';

const BioForm = () => {
  const [imgUrl, setImgUrl] = useState('');
  const [cvUrl, setCvUrl] = useState('');

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const { data: bioData, mutate } = useSWR('/api/bio', fetcher);

  const onChangeImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = (e) => {
      setImgUrl(e.target.result);
    };
    reader.readAsDataURL(file);
  };
  const onChangeCv = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = (e) => {
      setCvUrl(e.target.result);
    };
    reader.readAsDataURL(file);
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
      body: JSON.stringify({ bio, cv: cvUrl, imgUrl }),
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
          <div className="flex flex-col gap-4">
            <label
              htmlFor="cv"
              className="text-white font-semibold">
              CV
            </label>
            <Input
              label="CV"
              type="file"
              name="cv"
              id="cv"
              accept="application/pdf"
              onChange={onChangeCv}
            />
          </div>
          <div className="flex flex-col gap-4">
            <label
              htmlFor="image"
              className="text-white font-semibold">
              Image
            </label>

            <Input
              type="file"
              onChange={onChangeImage}
              accept="image/*"
              name="image"
              id="image"
            />
          </div>

          <Button
            variant="primary"
            label={bioData ? 'Update' : 'Add'}
          />
        </form>
      </div>
      <div className="col-span-2 object-bottom mt-auto flex flex-col gap-4">
        <div className="w-full relative rounded-md overflow-hidden aspect-square">
          {(imgUrl || bioData?.imgUrl) && (
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
            onClick={() => setImgUrl('')}
          />
        )}
      </div>
    </div>
  );
};
export default BioForm;
