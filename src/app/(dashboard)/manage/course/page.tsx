import CourseManage from '@/components/cource/CourceManager';
import { getAllCourses } from '@/lib/actions/cource.actions';
import { ECourseStatus } from '@/types/enums';

const page = async ({
  searchParams,
}: {
  searchParams: {
    page: number;
    search: string;
    status: ECourseStatus;
  };
}) => {
  const courses = await getAllCourses({
    page: searchParams.page || 1,
    limit: 10,
    search: searchParams.search,
    status: searchParams.status,
  });
  return <CourseManage courses={courses ? JSON.parse(JSON.stringify(courses)) : []}></CourseManage>;
};

export default page;
