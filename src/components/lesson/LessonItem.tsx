import Link from 'next/link';
import { IconPlay } from '../icons';

interface ILessonType {
  lesson: {
    title: string;
    duration: number;
  };
  url?: string;
}

const LessonItem = ({ lesson, url }: ILessonType) => {
  return (
    <div className='flex items-center gap-2 bgDarkMode border borerDarkMode rounded-lg p-4 text-base font-medium'>
      <IconPlay className='size-5' />
      {url ? <Link href={'/'}>{lesson.title}</Link> : <h4>{lesson.title}</h4>}
      <span className='ml-auto text-xs font-semibold'>{lesson.duration} phút</span>
    </div>
  );
};

export default LessonItem;
