'use client'
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import { Button } from '.';

const Content = ({title,description,id,routeName,mutate}) => {
  const router = useRouter();

  const handleDelete = async () => {
    const res = await fetch(`/api/${routeName}/${id}`, {
      method: 'DELETE',
    });
    if (!res.ok) return toast.error('Something went wrong');
    toast.success('Deleted successfully');
    mutate();
    router.refresh();
  };
  return (
    <div className="flex items-center justify-between border-b border-neutral-400/20 pb-4">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-gray-400">{description}</p>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Button
          label="Edit"
          variant="outline"
          onClick={()=>router.push(`/admin/${routeName}/${id}`)}
        />
        <Button
          label="Delete"
          variant="danger"
          onClick={handleDelete}
        />
      </div>
    </div>
  );
}
export default Content