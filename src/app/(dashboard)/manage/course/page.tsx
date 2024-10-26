import CourseManage from '@/components/cource/CourceManager';
import { getAllCourses } from '@/lib/actions/cource.actions';

const page = async () => {
  const courses = await getAllCourses();
  return (
    <CourseManage
      courses={courses ? JSON.parse(JSON.stringify(courses)) : []}
    ></CourseManage>
  );
};

export default page;
