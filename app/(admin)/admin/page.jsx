import { currentUser } from '@/actions/getCurrentUser';
import { BioInput } from '@/components/admin';

const AdminPage = async () => {
  const user = await currentUser();

  return (
    <div className="flex flex-col gap-4 text-white mt-10">
      <BioInput />
    </div>
  );
};
export default AdminPage;
