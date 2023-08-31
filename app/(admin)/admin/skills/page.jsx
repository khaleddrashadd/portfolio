import {  SkillsInput } from '@/components/admin';
import {Skills} from '@/components/admin/';

const SkillsPage = () => {
  return (
    <div className="flex flex-col gap-4 text-white mt-10">
      <SkillsInput />
      <Skills />
    </div>
  );
}
export default SkillsPage