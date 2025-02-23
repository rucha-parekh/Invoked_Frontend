import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Scholarships() {
  const scholarships = [
    {
      id: 1,
      name: "Merit Scholarship",
      eligibility: "GPA > 3.5",
      deadline: "2025-04-15",
      link: "https://example.com/apply",
      status: "Open",
    },
    {
      id: 2,
      name: "Need-based Scholarship",
      eligibility: "Based on financial need",
      deadline: "2025-05-01",
      link: "https://example.com/apply",
      status: "Closed",
    },
  ];

  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/90 shadow-xl rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Scholarships</h2>
        <GraduationCap className="w-5 h-5 text-purple-500" />
      </div>
      <div className="space-y-4">
        {scholarships.map((scholarship) => (
          <div key={scholarship.id} className="p-4 bg-gray-50 rounded-xl">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-medium text-gray-900">{scholarship.name}</h3>
              <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                scholarship.status === "Open"
                  ? "text-purple-600 bg-purple-50"
                  : "text-red-600 bg-red-50"
              }`}>
                {scholarship.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-2">
              Eligibility: {scholarship.eligibility}
            </p>
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-500">
                Deadline: {scholarship.deadline}
              </span>
              <a
                href={scholarship.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-600 hover:text-purple-800 font-medium"
              >
                Apply Now →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
