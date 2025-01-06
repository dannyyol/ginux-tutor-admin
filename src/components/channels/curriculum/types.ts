export interface LessonContent {
  description?: string;
  videoUrl?: string;
  notes?: string;
}

export interface Lesson {
  id: string;
  title: string;
  content?: LessonContent;
}

export interface Section {
  id: string;
  order: number;
  title: string;
  lessons: Lesson[];
  isExpanded: boolean;
}

export interface CurriculumState {
  sections: Section[];
}