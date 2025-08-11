"use client";
import { useState } from 'react';
import { FaLock, FaHeart } from 'react-icons/fa';

interface AccessGateProps {
  children: React.ReactNode;
}

export default function AccessGate({ children }: AccessGateProps) {
  const [accessCode, setAccessCode] = useState('');
  const [isAuthorized, setIsAuthorized] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correctCode = process.env.NEXT_PUBLIC_ACCESS_CODE || '2';
    
    if (accessCode.toLowerCase() === correctCode.toLowerCase()) {
      setIsAuthorized(true);
      setError('');
    } else {
      setError('Incorrect access code. Try again!');
      setAccessCode('');
    }
  };

  if (isAuthorized) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-200 via-blue-400 to-blue-700 flex items-center justify-center p-4">
      <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 border-2 border-white/20 text-center max-w-md w-full">
        <div className="mb-6">
          <div className="bg-blue-100 rounded-full p-4 inline-block mb-4 shadow-lg">
            <FaLock className="text-blue-600" size={48} />
          </div>
          <h1 className="text-3xl font-bold text-blue-800 mb-2">
            Private Area ⊘
          </h1>
          <p className="text-blue-600">
            Work your brain!
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              value={accessCode}
              onChange={(e) => setAccessCode(e.target.value)}
              placeholder="Enter access code..."
              className="w-full px-4 py-3 rounded-xl border-2 border-blue-200 focus:border-blue-500 focus:outline-none text-center text-lg font-medium"
              autoFocus
            />
          </div>
          
          {error && (
            <p className="text-red-500 text-sm font-medium">{error}</p>
          )}
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg transition-all duration-300 hover:scale-105 font-semibold text-lg flex items-center justify-center gap-2"
          >
            <FaHeart className="text-pink-300" />
            Enter
          </button>
        </form>
        
        <div className="mt-6 text-blue-500 text-sm">
          <p>Easiest number and it&apos;s just one or maybe two :p?</p>
        </div>
      </div>
    </div>
  );
}