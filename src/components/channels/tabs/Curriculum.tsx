import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { v4 as uuidv4 } from 'uuid';
import CurriculumSection from '../curriculum/CurriculumSection';
import type { Section, Lesson } from '../curriculum/types';

const initialSections: Section[] = [
  {
    id: uuidv4(),
    order: 1,
    title: 'Introduction',
    lessons: [
      {
        id: uuidv4(),
        title: 'Welcome to the course',
      }
    ],
    isExpanded: true
  }
];

const Curriculum = () => {
  const [sections, setSections] = useState<Section[]>(initialSections);

  const handleAddSection = () => {
    const newSection: Section = {
      id: uuidv4(),
      order: sections.length + 1,
      title: `New Section`,
      lessons: [],
      isExpanded: true
    };
    setSections([...sections, newSection]);
  };

  const handleAddLesson = (sectionId: string) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          lessons: [...section.lessons, {
            id: uuidv4(),
            title: 'New Lesson'
          }]
        };
      }
      return section;
    }));
  };

  const handleEditSection = (sectionId: string, newTitle: string) => {
    setSections(sections.map(section =>
      section.id === sectionId ? { ...section, title: newTitle } : section
    ));
  };

  const handleDeleteSection = (sectionId: string) => {
    if (confirm('Are you sure you want to delete this section?')) {
      setSections(sections.filter(section => section.id !== sectionId));
    }
  };

  const handleToggleSection = (sectionId: string) => {
    setSections(sections.map(section =>
      section.id === sectionId ? { ...section, isExpanded: !section.isExpanded } : section
    ));
  };

  const handleUpdateLesson = (sectionId: string, lessonId: string, updates: Partial<Lesson>) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          lessons: section.lessons.map(lesson => 
            lesson.id === lessonId ? { ...lesson, ...updates } : lesson
          ),
        };
      }
      return section;
    }));
  };

  const handleDeleteLesson = (sectionId: string, lessonId: string) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          lessons: section.lessons.filter(lesson => lesson.id !== lessonId),
        };
      }
      return section;
    }));
  };

  return (
    <div className="p-6 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <div className="mb-6 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Channel Curriculum</h2>
        <div className="space-x-3">
          <button className="px-4 py-2 text-purple-600 hover:bg-purple-50 dark:text-purple-400 dark:hover:bg-purple-700 rounded-lg">
            Save
          </button>
          <button className="px-4 py-2 bg-purple-600 text-white hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600 rounded-lg">
            Save & Preview
          </button>
        </div>
      </div>
      <div className="max-w-3xl">
        <div className="space-y-4">
          {sections.map((section) => (
            <CurriculumSection
              key={section.id}
              section={section}
              onAddLesson={handleAddLesson}
              onEditSection={handleEditSection}
              onDeleteSection={handleDeleteSection}
              onToggleSection={handleToggleSection}
              onUpdateLesson={handleUpdateLesson}
              onDeleteLesson={handleDeleteLesson}
            />
          ))}
          <button
            onClick={handleAddSection}
            className="w-full py-3 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-lg text-gray-500 hover:border-purple-500 hover:text-purple-500 dark:text-gray-400 dark:hover:border-purple-500 dark:hover:text-purple-500 flex items-center justify-center gap-2"
          >
            <Plus className="h-4 w-4" />
            Add Section
          </button>
        </div>

        <div className="flex justify-between mt-6">
          <button className="px-6 py-2 border border-gray-200 text-gray-600 rounded-lg hover:bg-gray-50 dark:border-gray-700 dark:text-gray-300 dark:hover:bg-gray-600">
            Previous
          </button>
          <button className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 dark:bg-purple-700 dark:hover:bg-purple-600">
            Save & Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Curriculum;
