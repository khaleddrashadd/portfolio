import { currentUser } from '@/actions/getCurrentUser';

const AdminPage = async () => {
  const user = await currentUser();
  console.log(user)
  return (
    <div className="flex">
      <div>khaled</div>
      <div>khaled</div>
      <div>khaled</div>
    </div>
  );
};
export default AdminPage;
