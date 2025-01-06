import React from 'react';
import { FileText, Video, Download, Plus } from 'lucide-react';
import { Lesson } from './types';

interface LessonContentProps {
  lesson: Lesson;
  onAddContent: () => void;
}

const LessonContent = ({ lesson, onAddContent }: LessonContentProps) => {
  const hasContent = lesson.content && (
    lesson.content.description || 
    lesson.content.videoUrl || 
    lesson.content.notes
  );

  if (!hasContent) {
    return (
      <div className="pl-6 pb-3">
        <button
          onClick={onAddContent}
          className="flex items-center gap-2 text-purple-600 hover:text-purple-700"
        >
          <Plus className="h-4 w-4" />
          Add Content
        </button>
      </div>
    );
  }

  return (
    <div className="pl-6 pb-3">
      <div className="space-y-2">
        {lesson.content?.description && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <FileText className="h-4 w-4" />
            <span>{lesson.content.description}</span>
          </div>
        )}
        {lesson.content?.videoUrl && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Video className="h-4 w-4" />
            <a href={lesson.content.videoUrl} target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:underline">
              View Video
            </a>
          </div>
        )}
        {lesson.content?.notes && (
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <Download className="h-4 w-4" />
            <span>{lesson.content.notes}</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default LessonContent;