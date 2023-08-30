import { currentUser } from '@/actions/getCurrentUser';

const AdminPage = async () => {
  const user = await currentUser();
  console.log(user?.id,"😍")
  return (
    <div className="flex">
      <div>khaled</div>
      <div>khaled</div>
      <div>khaled</div>
    </div>
  );
};
export default AdminPage;
