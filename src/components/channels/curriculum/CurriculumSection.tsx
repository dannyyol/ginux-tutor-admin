import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Plus, Pencil, Trash2, Check, X } from 'lucide-react';
import CurriculumLesson from './CurriculumLesson';
import { Section, Lesson } from './types';

interface CurriculumSectionProps {
  section: Section;
  onAddLesson: (sectionId: string) => void;
  onEditSection: (sectionId: string, newTitle: string) => void;
  onDeleteSection: (sectionId: string) => void;
  onToggleSection: (sectionId: string) => void;
  onUpdateLesson: (sectionId: string, lessonId: string, updates: Partial<Lesson>) => void;
  onDeleteLesson: (sectionId: string, lessonId: string) => void;
}

const CurriculumSection = ({
  section,
  onAddLesson,
  onEditSection,
  onDeleteSection,
  onToggleSection,
  onUpdateLesson,
  onDeleteLesson,
}: CurriculumSectionProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(section.title);

  const handleSaveEdit = () => {
    if (editedTitle.trim()) {
      onEditSection(section.id, editedTitle);
      setIsEditing(false);
    }
  };

  const handleCancelEdit = () => {
    setEditedTitle(section.title);
    setIsEditing(false);
  };

  return (
    <div className="mb-4 bg-gray-50 rounded-lg">
      <div className="flex items-center justify-between p-4">
        <div className="flex items-center gap-2 flex-1">
          <button onClick={() => onToggleSection(section.id)} className="p-1">
            {section.isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          
          {isEditing ? (
            <div className="flex-1 flex items-center gap-2">
              <input
                type="text"
                value={editedTitle}
                onChange={(e) => setEditedTitle(e.target.value)}
                className="flex-1 px-3 py-1 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                placeholder="Enter section title"
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
            <span className="font-medium">Section {section.order}: {section.title}</span>
          )}
        </div>
        
        <div className="flex items-center gap-2">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddLesson(section.id);
            }}
            className="p-1 hover:bg-gray-200 rounded-lg"
          >
            <Plus className="h-4 w-4" />
          </button>
          {!isEditing && (
            <>
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
                  onDeleteSection(section.id);
                }}
                className="p-1 hover:bg-gray-200 rounded-lg"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </>
          )}
        </div>
      </div>
      
      {section.isExpanded && (
        <div className="p-4 pt-0">
          {section.lessons.map((lesson) => (
            <CurriculumLesson
              key={lesson.id}
              lesson={lesson}
              onUpdateLesson={(lessonId, updates) => onUpdateLesson(section.id, lessonId, updates)}
              onDeleteLesson={(lessonId) => onDeleteLesson(section.id, lessonId)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default CurriculumSection;