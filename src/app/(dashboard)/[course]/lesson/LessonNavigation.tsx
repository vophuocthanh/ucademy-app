'use client';

import { IconLeftArrow, IconRightArrow } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

interface ILessonNavigationType {
  nextLesson: string;
  prevLesson: string;
}

const LessonNavigation = ({ nextLesson, prevLesson }: ILessonNavigationType) => {
  const router = useRouter();

  return (
    <div className='flex gap-3'>
      <Button
        className='size-10 p-3'
        disabled={!prevLesson}
        onClick={() => (!prevLesson ? null : router.push(prevLesson))}
      >
        <IconLeftArrow />
      </Button>
      <Button
        className='size-10 p-3'
        disabled={!nextLesson}
        onClick={() => (!nextLesson ? null : router.push(nextLesson))}
      >
        <IconRightArrow />
      </Button>
    </div>
  );
};

export default LessonNavigation;
