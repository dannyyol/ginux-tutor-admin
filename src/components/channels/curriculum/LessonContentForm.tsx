import React, { useState } from 'react';
import { FileText, Video, Download, X } from 'lucide-react';
import { LessonContent as LessonContentType } from './types';

interface LessonContentFormProps {
  onClose: () => void;
  onSave: (content: LessonContentType) => void;
  initialContent?: LessonContentType;
}

const LessonContentForm = ({ onClose, onSave, initialContent }: LessonContentFormProps) => {
  const [content, setContent] = useState<LessonContentType>(initialContent || {
    description: '',
    videoUrl: '',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(content);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg w-full max-w-md">
        <div className="flex justify-between items-center p-4 border-b">
          <h3 className="text-lg font-medium">Add Content</h3>
          <button onClick={onClose} className="p-1 hover:bg-gray-100 rounded-full">
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-4 space-y-4">
          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <FileText className="h-4 w-4" />
              Description
            </label>
            <textarea
              value={content.description}
              onChange={(e) => setContent({ ...content, description: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={3}
              placeholder="Enter lesson description..."
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Video className="h-4 w-4" />
              Video URL
            </label>
            <input
              type="url"
              value={content.videoUrl}
              onChange={(e) => setContent({ ...content, videoUrl: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              placeholder="Enter video URL..."
            />
          </div>

          <div>
            <label className="flex items-center gap-2 text-sm font-medium mb-2">
              <Download className="h-4 w-4" />
              Notes
            </label>
            <textarea
              value={content.notes}
              onChange={(e) => setContent({ ...content, notes: e.target.value })}
              className="w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              rows={3}
              placeholder="Enter lecture notes..."
            />
          </div>

          <div className="flex justify-end gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Save Content
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LessonContentForm;