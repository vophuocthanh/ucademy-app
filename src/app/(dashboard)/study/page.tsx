import StudyCourses from '@/app/(dashboard)/study/StudyCourses';
import Heading from '@/components/common/Heading';
import { getUserCourses } from '@/lib/actions/user.actions';

const page = async () => {
  const courses = await getUserCourses();
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <StudyCourses courses={courses ? JSON.parse(JSON.stringify(courses)) : []}></StudyCourses>
    </>
  );
};

export default page;
