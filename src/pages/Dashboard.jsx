import React from "react";
import Sidebar from "../components/Sidebar";
import KeyMetrics from "../components/KeyMetrics";
import GraphCards from "../components/GraphCards";
import AttendanceTable from "../components/AttendanceTable";
import DailySummary from "../components/DailySummary";
import UpcomingEvents from "../components/UpcomingEvents";
import ExamsAndResults from "../components/ExamsAndResults";
import UpcomingHolidays from "../components/UpcomingHolidays";
import Assignments from "../components/Assignments";
import Scholarships from "../components/Scholarships";
import TeacherRemarks from "../components/TeacherRemarks";

export default function Dashboard() {
  return (
    <div className="flex h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 text-white">
      {/* Main Content */}
      <div className="flex-1 p-6 overflow-y-auto">
        <h1 className="text-5xl font-bold mb-8">Dashboard</h1>
        {/* Key Metrics Section */}
        <KeyMetrics />
        {/* Graph Cards Section */}
        <GraphCards />
        {/* Other Dashboard Components */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <AttendanceTable />
          <DailySummary />
          <UpcomingEvents />
          <ExamsAndResults />
          <UpcomingHolidays />
          <Assignments />
          <Scholarships />
          <TeacherRemarks />
        </div>
      </div>
    </div>
  );
}
