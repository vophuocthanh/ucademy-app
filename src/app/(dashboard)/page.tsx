import CourseItem from '@/components/cource/CourceItem';
import Heading from '@/components/typography/Heading';

const page = () => {
  return (
    <div>
      <Heading>Khám phá</Heading>
      <div className='grid grid-cols-3 gap-8 mt-8'>
        <CourseItem image='https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png' />
        <CourseItem image='https://www.felixvemmer.com/posts/why-next-js/twitter-card.png' />
        <CourseItem image='https://static.bit.dev/Community/images/bit-with-nextjs.jpg' />
      </div>
    </div>
  );
};

export default page;
