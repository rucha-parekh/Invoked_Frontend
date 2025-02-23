import React from 'react';
import { BookOpen, Clock } from 'lucide-react';

export default function Assignments() {
  const assignments = [
    {
      id: 1,
      studentId: "101",
      subject: "Math",
      description: "Complete algebra homework",
      dueDate: "2025-02-25",
      status: "Incomplete",
      resources: "https://example.com/resource1",
    },
    {
      id: 2,
      studentId: "102",
      subject: "Science",
      description: "Write a report on ecosystems",
      dueDate: "2025-02-28",
      status: "Complete",
      resources: "https://example.com/resource2",
    },
  ];
  
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/90 shadow-xl rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-800">Assignments</h2>
        <BookOpen className="w-5 h-5 text-purple-500" />
      </div>
      <div className="space-y-4">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-1 text-xs font-medium text-purple-600 bg-purple-50 rounded-full">
                {assignment.subject}
              </span>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                assignment.status === "Complete"
                  ? "text-green-600 bg-green-50"
                  : "text-purple-600 bg-purple-50"
              }`}>
                {assignment.status}
              </span>
            </div>
            <h3 className="font-medium text-gray-900">{assignment.description}</h3>
            <div className="mt-2 flex items-center text-sm text-gray-500">
              <Clock className="w-4 h-4 mr-1" />
              Due: {assignment.dueDate}
            </div>
            <div className="mt-4">
              <a
                href={assignment.resources}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-purple-600 hover:text-purple-800 font-medium"
              >
                View Resources →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
