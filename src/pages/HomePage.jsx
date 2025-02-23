import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Users, School, Sparkles } from 'lucide-react';

const HomePage = () => {  // Changed from LandingPage to HomePage
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-purple-800 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-6">
        {/* Logo/Brand */}
        <div className="mb-8 flex items-center gap-3">
          <Sparkles className="w-12 h-12 text-purple-300" />
          <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-200 to-indigo-200">
            EduConnect
          </h2>
        </div>

        {/* Main Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-purple-200">
            Welcome to EduConnect
          </h1>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto leading-relaxed">
            Fostering meaningful connections between parents and teachers
            to create an enriched learning environment for every student.
          </p>
        </div>

        {/* Cards Container */}
        <div className="flex flex-col sm:flex-row gap-8 w-full max-w-4xl justify-center px-6">
          {/* Parent Card */}
          <button
            onClick={() => navigate('/dashboard')}
            className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 flex-1
                     hover:bg-white/15 transform hover:-translate-y-2 transition-all duration-300
                     border border-white/20 hover:border-purple-300/50"
          >
            <Users className="w-12 h-12 mb-4 text-purple-300" />
            <h3 className="text-2xl font-semibold mb-3 text-white">For Parents</h3>
            <p className="text-purple-200 mb-6">Stay connected with your child's educational journey and engage with teachers seamlessly.</p>
            <div className="flex items-center text-purple-300 group-hover:text-white transition-colors">
              Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>

          {/* Teacher Card */}
          <button
            onClick={() => navigate('/teacher')}
            className="group relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 flex-1
                     hover:bg-white/15 transform hover:-translate-y-2 transition-all duration-300
                     border border-white/20 hover:border-purple-300/50"
          >
            <School className="w-12 h-12 mb-4 text-purple-300" />
            <h3 className="text-2xl font-semibold mb-3 text-white">For Teachers</h3>
            <p className="text-purple-200 mb-6">Streamline communication and create a collaborative environment for student success.</p>
            <div className="flex items-center text-purple-300 group-hover:text-white transition-colors">
              Get Started <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform" />
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center">
          <p className="text-purple-200">Need assistance? Reach out to us at</p>
          <a href="mailto:support@educonnect.com" 
             className="text-white hover:text-purple-300 transition-colors font-semibold">
            support@educonnect.com
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;  // Changed from LandingPage to HomePage