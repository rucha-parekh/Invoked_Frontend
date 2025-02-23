import React from 'react';
import { Volume2 } from 'lucide-react';

export default function DailySummary() {
  return (
    <div className="bg-white/90 backdrop-blur-xl border border-white/90 shadow-xl rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Daily Summary</h2>
        <Volume2 className="w-5 h-5 text-purple-500" />
      </div>
      <div className="space-y-4">
        <p className="text-gray-600">Teacher John uploaded a new summary:</p>
        <div className="bg-gray-50 rounded-xl p-4">
          <audio controls className="w-full">
            <source src="audio_url.mp3" type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </div>
      </div>
    </div>
  );
}
