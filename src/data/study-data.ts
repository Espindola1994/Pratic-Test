import { categories } from './study-data-1';
import { studyData } from './study-data-1';
import { studyData2 } from './study-data-2';
import { studyData3 } from './study-data-3';
import { studyData4 } from './study-data-4';
import { studyData5 } from './study-data-5';
import { studyData6 } from './study-data-6';
import { studyData7 } from './study-data-7';
import { studyData8 } from './study-data-8';
import { StudyItem } from '../types/study';

export { categories };

export const allStudyItems: StudyItem[] = [
  ...studyData,
  ...studyData2,
  ...studyData3,
  ...studyData4,
  ...studyData5,
  ...studyData6,
  ...studyData7,
  ...studyData8
];
