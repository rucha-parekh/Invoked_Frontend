import React from "react";
import { UserCheck, Calendar, BookOpen } from "lucide-react";

export default function KeyMetrics() {
  // Sample metrics data; update as needed
  const daysAttended = 180;
  const daysOpen = 200;
  const upcomingAssignment = {
    subject: "Math",
    description: "Complete algebra homework",
    dueDate: "2025-02-25",
  };
  const nextEvent = {
    name: "Annual Day",
    date: "2025-03-01",
  };

  return (
    <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Attendance Metric */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
        <div className="flex items-center mb-4">
          <UserCheck className="w-6 h-6 text-purple-300 mr-2" />
          <h3 className="text-lg font-semibold">Attendance</h3>
        </div>
        <p className="text-3xl font-bold">{daysAttended}/{daysOpen}</p>
        <p className="text-sm text-gray-300">Days Attended</p>
      </div>
      {/* Upcoming Assignment Metric */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
        <div className="flex items-center mb-4">
          <BookOpen className="w-6 h-6 text-purple-300 mr-2" />
          <h3 className="text-lg font-semibold">Next Assignment</h3>
        </div>
        <p className="text-xl font-bold">{upcomingAssignment.subject}</p>
        <p className="text-sm">{upcomingAssignment.description}</p>
        <p className="text-sm text-gray-300">Due: {upcomingAssignment.dueDate}</p>
      </div>
      {/* Next Event Metric */}
      <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-white">
        <div className="flex items-center mb-4">
          <Calendar className="w-6 h-6 text-purple-300 mr-2" />
          <h3 className="text-lg font-semibold">Next Event</h3>
        </div>
        <p className="text-xl font-bold">{nextEvent.name}</p>
        <p className="text-sm text-gray-300">On: {nextEvent.date}</p>
      </div>
    </div>
  );
}
