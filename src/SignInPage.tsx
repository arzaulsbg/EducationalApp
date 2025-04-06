import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = () => {
    // Handle sign-in logic here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <div className="text-center mb-6">
          <img src="/path/to/logo.png" alt="App Logo" className="mx-auto mb-4" />
          <h1 className="text-3xl font-bold">Sign In to Your Account</h1>
          <p className="text-lg text-gray-600">Start your learning journey now</p>
        </div>
        <div className="mb-4">
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
        </div>
        <div className="mb-4 relative">
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-600"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-3 text-gray-600"
          >
            {showPassword ? 'Hide' : 'Show'}
          </button>
        </div>
        <div className="flex justify-between items-center mb-6">
          <Link to="/forgot-password" className="text-indigo-600 hover:underline">
            Forgot Password?
          </Link>
          <Link to="/sign-up" className="text-indigo-600 hover:underline">
            Don't have an account? Create one here.
          </Link>
        </div>
        <button
          onClick={handleSignIn}
          className="w-full bg-indigo-600 text-white py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          disabled={!email || !password}
        >
          Sign In
        </button>
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Or sign in with</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-red-600 text-white px-4 py-2 rounded-lg">Google</button>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg">Facebook</button>
          </div>
        </div>
        <div className="mt-6 text-center text-gray-600">
          By signing in, you agree to our <Link to="/terms" className="text-indigo-600 hover:underline">Terms of Service</Link> and <Link to="/privacy" className="text-indigo-600 hover:underline">Privacy Policy</Link>.
        </div>
      </div>
    </div>
  );
}

export default SignInPage; 