import { CourceGrid } from '@/components/common';
import CourseItem from '@/components/cource/CourceItem';
import Heading from '@/components/typography/Heading';
import createUser from '@/lib/actions/user.actions';

const page = async () => {
  const user = await createUser({
    clerkId: 'clerk_123',
    email_address: 'phuocthanh2k03@gmail.com',
    username: 'bin2003',
  });
  return (
    <div>
      <Heading>Khám phá</Heading>
      <CourceGrid>
        <CourseItem image='https://mobisoftinfotech.com/resources/wp-content/uploads/2022/04/next-JS-framework.png' />
        <CourseItem image='https://www.felixvemmer.com/posts/why-next-js/twitter-card.png' />
        <CourseItem image='https://static.bit.dev/Community/images/bit-with-nextjs.jpg' />
        <CourseItem image='https://www.syncfusion.com/blogs/wp-content/uploads/2022/09/Optimize-NextJS-App-bundle-performance.png' />
      </CourceGrid>
    </div>
  );
};

export default page;
