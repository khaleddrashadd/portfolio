import { getSkill } from '@/actions/getSkill';
import { SkillsInput } from '@/components/admin'

const SkillPage =async ({params:{skillId}}) => {
  const skill = await getSkill(skillId);

  return <SkillsInput data={skill} />;
}
export default SkillPage