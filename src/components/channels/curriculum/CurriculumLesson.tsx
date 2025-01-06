import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Pencil, Trash2, Check, X } from 'lucide-react';
import { Lesson, LessonContent as LessonContentType } from './types';
import LessonContent from './LessonContent';
import LessonContentForm from './LessonContentForm';

interface CurriculumLessonProps {
  lesson: Lesson;
  onUpdateLesson: (lessonId: string, updates: Partial<Lesson>) => void;
  onDeleteLesson: (lessonId: string) => void;
}

const CurriculumLesson = ({ lesson, onUpdateLesson, onDeleteLesson }: CurriculumLessonProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [showContentForm, setShowContentForm] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(lesson.title);

  const handleSaveContent = (content: LessonContentType) => {
    onUpdateLesson(lesson.id, { content });
    setShowContentForm(false);
  };

  const handleSaveEdit = () => {
    if (editedTitle.trim()) {
      onUpdateLesson(lesson.id, { title: editedTitle });
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedTitle(lesson.title);
    setIsEditing(false);
  };

  return (
    <>
      <div className="border-b border-gray-200 last:border-0">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2 flex-1">
            <button onClick={() => setIsExpanded(!isExpanded)} className="p-1">
              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </button>
            
            {isEditing ? (
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="text"
                  value={editedTitle}
                  onChange={(e) => setEditedTitle(e.target.value)}
                  className="flex-1 px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="Enter lesson title"
                  autoFocus
                />
                <button
                  onClick={handleSaveEdit}
                  className="p-1 hover:bg-green-100 rounded-lg text-green-600"
                >
                  <Check className="h-4 w-4" />
                </button>
                <button
                  onClick={handleCancelEdit}
                  className="p-1 hover:bg-red-100 rounded-lg text-red-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <span>{lesson.title}</span>
            )}
          </div>
          
          {!isEditing && (
            <div className="flex items-center gap-2">
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  setIsEditing(true);
                }} 
                className="p-1 hover:bg-gray-200 rounded-lg"
              >
                <Pencil className="h-4 w-4" />
              </button>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteLesson(lesson.id);
                }} 
                className="p-1 hover:bg-gray-200 rounded-lg"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
        
        {isExpanded && (
          <LessonContent 
            lesson={lesson} 
            onAddContent={() => setShowContentForm(true)} 
          />
        )}
      </div>

      {showContentForm && (
        <LessonContentForm
          onClose={() => setShowContentForm(false)}
          onSave={handleSaveContent}
          initialContent={lesson.content}
        />
      )}
    </>
  );
};

export default CurriculumLesson;