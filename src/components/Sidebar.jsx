import { FaUser, FaBook, FaCalendar, FaGraduationCap, FaHome } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="w-64 bg-gray-900 h-screen p-6 text-white">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaHome /> <span>Home</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaUser /> <span>Attendance</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaBook /> <span>Daily Summary</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaCalendar /> <span>Events</span>
        </li>
        <li className="flex items-center space-x-2 hover:text-gray-300 cursor-pointer">
          <FaGraduationCap /> <span>Exams</span>
        </li>
      </ul>
    </div>
  );
}
