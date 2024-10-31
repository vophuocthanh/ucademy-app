import CourseGrid from '@/components/common/CourceGrid';
import Heading from '@/components/common/Heading';
import CourseItem from '@/components/cource/CourceItem';
import { getUserCourses } from '@/lib/actions/user.actions';

const page = async () => {
  const courses = await getUserCourses();
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <CourseGrid>
        {courses &&
          courses.length > 0 &&
          courses?.map((item) => (
            <CourseItem key={item.slug} data={item} cta='Tiếp tục học' url='/'></CourseItem>
          ))}
      </CourseGrid>
    </>
  );
};

export default page;
