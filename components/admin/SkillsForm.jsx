'use client'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button, Heading, Input } from '.';

const SkillsForm = ({value}) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = e.target.elements;
    const title = data.title.value;
    const description = data.description.value;
    const dateRange = data.date.value;

    const res = await fetch('/api/skills', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, description, dateRange }),
    });
    if (!res.ok) return toast.error('Something went wrong');
    toast.success('Skill created successfully');
    router.refresh();
  };

  return (
    <div className="grid grid-cols-6 gap-4">
      <div className="col-span-4">
        <Heading title="Skills" />
        <form
          className="flex flex-col gap-8"
          onSubmit={handleSubmit}>
          <Input
            label="Title"
            type="text"
            className="text-gray-900"
            name="title"
            defaultValue={value}
          />
          <Input
            label="Date Range"
            type="text"
            className="text-gray-900"
            name="date"
            defaultValue={value}
          />
          <textarea
            className="w-full rounded-lg p-4 focus:outline-none border-2 focus:border-sky-400 text-black text-lg"
            rows="5"
            cols="10"
            placeholder="Description"
            name="description"
            defaultValue={value}
          />
          <Button
            variant="primary"
            label="Submit"
          />
        </form>
      </div>
    </div>
  );
}
export default SkillsForm