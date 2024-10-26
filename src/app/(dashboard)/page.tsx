import { CourceGrid } from '@/components/common';
import Heading from '@/components/common/Heading';
import CourseItem from '@/components/cource/CourceItem';
import { getAllCourses } from '@/lib/actions/cource.actions';

const page = async () => {
  const courses = (await getAllCourses()) || [];
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourceGrid>
        {courses.length > 0 &&
          courses?.map((item) => (
            <CourseItem key={item.slug} data={item}></CourseItem>
          ))}
      </CourceGrid>
    </div>
  );
};

export default page;
