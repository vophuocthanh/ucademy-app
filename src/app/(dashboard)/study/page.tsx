import { CourceGrid } from '@/components/common';
import CourseItem from '@/components/cource/CourceItem';
import Heading from '@/components/typography/Heading';

export default function page() {
  return (
    <>
      <Heading>Khu vực học tập</Heading>
      <CourceGrid>
        <CourseItem image='https://soshace.com/wp-content/uploads/2019/10/Getting-Started-with-NextJS-Inside.jpg' />
        <CourseItem image='https://www.perfomatix.com/wp-content/uploads/2023/02/Next.js-13-All-you-need-to-know.png' />
        <CourseItem image='https://kb.pavietnam.vn/wp-content/uploads/2022/10/nextjs-1.png' />
        <CourseItem image='https://www.syncfusion.com/blogs/wp-content/uploads/2022/09/Optimize-NextJS-App-bundle-performance.png' />
      </CourceGrid>
    </>
  );
}
