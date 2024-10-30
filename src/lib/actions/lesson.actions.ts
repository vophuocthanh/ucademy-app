'use server';

import Course from '@/database/cource.model';
import Lecture from '@/database/lecture.model';
import Lesson, { ILesson } from '@/database/lesson.model';
import { connectToDatabase } from '@/lib/mongoose';
import { TCreateLessonParams, TUpdateLessonParams } from '@/types';
import { revalidatePath } from 'next/cache';

export async function createLesson(params: TCreateLessonParams) {
  try {
    connectToDatabase();
    const findCourse = await Course.findById(params.course);
    if (!findCourse) return;
    const findLecture = await Lecture.findById(params.lecture);
    if (!findLecture) return;
    const newLesson = await Lesson.create(params);
    findLecture.lessons.push(newLesson._id);
    await findLecture.save();
    revalidatePath(params.path || '/');
    if (!newLesson) return;
    return {
      success: true,
    };
  } catch (error) {}
}

export async function updateLesson(params: TUpdateLessonParams) {
  try {
    connectToDatabase();
    const res = await Lesson.findByIdAndUpdate(params.lessonId, params.updateData, { new: true }); // new true có nghĩa là cập nhật và trả ra chó chúg ta bản ghi mới
    revalidatePath(params.path || '/');
    if (!res) return;
    return {
      success: true,
    };
  } catch (error) {}
}

export async function getLessonBySlug({
  slug,
  course,
}: {
  slug: string;
  course: string;
}): Promise<ILesson | undefined> {
  try {
    connectToDatabase();
    const findLesson = await Lesson.findOne({
      slug,
      course,
    });
    return findLesson;
  } catch (error) {}
}

export async function findAllLessons({
  course,
}: {
  course: string;
}): Promise<ILesson[] | undefined> {
  try {
    connectToDatabase();
    const lessons = await Lesson.find({
      course,
    });
    return lessons;
  } catch (error) {
    console.log(error);
  }
}
