import React, { useState } from "react";
import Swal from "sweetalert2";
import './Login.css'; // Assuming you have a CSS file for styling

const Login = ({ setShowLoginForm }) => {
  // State for show/hide password in create account form
  const [showCreatePassword, setShowCreatePassword] = useState(false);
  // State for create account form fields
  const [showCreateForm, setShowCreateForm] = useState(false); // Toggle create account form
  const [newFirstName, setNewFirstName] = useState(""); // First Name
  const [newLastName, setNewLastName] = useState("");  // Last Name
  const [newEmail, setNewEmail] = useState("");        // Email
  const [newPassword, setNewPassword] = useState("");  // Password
  const [confirmPassword, setConfirmPassword] = useState(""); // Confirm Password
  const [createError, setCreateError] = useState("");  // Error for create account form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [formError, setFormError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex =
      /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
    return passwordRegex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setFormError("");
    setPasswordError("");

    if (!validateEmail(email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setPasswordError(
        "Password must be at least 8 characters long and include an uppercase letter, number, and special character."
      );
      return;
    }

    // ✅ SweetAlert2 success message
    Swal.fire({
      title: "Login Successful!",
      text: "You have logged in successfully.",
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });

    // Clear form (optional)
    setEmail("");
    setPassword("");
  };

  return (
    <div
      onClick={() => setShowLoginForm(false)}
      className="fixed inset-0 z-50 min-h-screen flex items-center justify-center bg-gray-100 bg-opacity-80"
    >
      <div
        className="relative w-full max-w-sm bg-white p-8 rounded-lg shadow-lg z-10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* 🎯 Bullets inside the form box */}
        <div className="bullet bullet-large"></div>
        <div className="bullet bullet-small"></div>

        {!showCreateForm ? (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Login</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@mail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute top-2.5 right-3 text-gray-500 text-sm"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      // Eye-off SVG icon
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.25 4.5 6.75 7.5 12 7.5 1.563 0 3.063-.281 4.477-.777M3.98 8.223l16.04 7.554M3.98 8.223A10.477 10.477 0 0 1 12 4.5c5.25 0 9.75 3 12 7.5a10.477 10.477 0 0 1-1.73 3.777M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    ) : (
                      // Eye SVG icon
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c2.25-4.5 6.75-7.5 12-7.5s9.75 3 12 7.5c-2.25 4.5-6.75 7.5-12 7.5s-9.75-3-12-7.5Zm9.75 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
                {passwordError && <p className="text-xs text-red-500 mt-1">{passwordError}</p>}
              </div>

              {/* Submit */}
              <div className="flex gap-4 justify-center mt-2">
                <button 
                  type="submit"
                  className="w-32 text-white py-2 rounded-md transition duration-200"
                  style={{ backgroundColor: '#2563EB' }}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  className="w-32 text-white py-2 rounded-md transition duration-200 whitespace-nowrap"
                  style={{ backgroundColor: '#2563EB' }}
                  onClick={() => setShowCreateForm(true)}
                >
                  Create Account
                </button>
              </div>

              {/* Error */}
              {formError && <p className="text-sm text-red-500 text-center mt-2">{formError}</p>}
            </form>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create Account</h2>
            {/* Create Account Form - collects first name, last name, email, password, confirm password */}
            <form className="space-y-4" onSubmit={e => {
              e.preventDefault();
              setCreateError("");
              // Validate all fields are filled
              if (!newFirstName || !newLastName || !newEmail || !newPassword || !confirmPassword) {
                setCreateError("Please fill in all fields.");
                return;
              }
              // Validate password match
              if (newPassword !== confirmPassword) {
                setCreateError("Passwords do not match.");
                return;
              }
              // You can add more validation here (e.g., email format, password strength)
              // Simulate success with SweetAlert2
              Swal.fire({
                title: "Account Created!",
                text: `Welcome, ${newFirstName} ${newLastName}!`,
                icon: "success",
                confirmButtonColor: "#2563EB",
                confirmButtonText: "OK",
              });
              // Clear form fields after success
              setNewFirstName("");
              setNewLastName("");
              setNewEmail("");
              setNewPassword("");
              setConfirmPassword("");
              setShowCreateForm(false);
            }}>
              {/* First Name Field */}
              <div>
                <label htmlFor="newFirstName" className="block text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  id="newFirstName"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="First Name"
                  value={newFirstName}
                  onChange={e => setNewFirstName(e.target.value)}
                  required
                />
              </div>
              {/* Last Name Field */}
              <div>
                <label htmlFor="newLastName" className="block text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  id="newLastName"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Last Name"
                  value={newLastName}
                  onChange={e => setNewLastName(e.target.value)}
                  required
                />
              </div>
              {/* Email Field */}
              <div>
                <label htmlFor="newEmail" className="block text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  id="newEmail"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="example@mail.com"
                  value={newEmail}
                  onChange={e => setNewEmail(e.target.value)}
                  required
                />
              </div>
              {/* Password Field with show/hide icon */}
              <div>
                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">Password</label>
                <div className="relative">
                  <input
                    type={showCreatePassword ? "text" : "password"}
                    id="newPassword"
                    className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="••••••••"
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowCreatePassword(!showCreatePassword)}
                    className="absolute top-2.5 right-3 text-gray-500 text-sm"
                    aria-label={showCreatePassword ? "Hide password" : "Show password"}
                  >
                    {showCreatePassword ? (
                      // Eye-off SVG icon
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 2.25 12c2.25 4.5 6.75 7.5 12 7.5 1.563 0 3.063-.281 4.477-.777M3.98 8.223l16.04 7.554M3.98 8.223A10.477 10.477 0 0 1 12 4.5c5.25 0 9.75 3 12 7.5a10.477 10.477 0 0 1-1.73 3.777M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                    ) : (
                      // Eye SVG icon
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12c2.25-4.5 6.75-7.5 12-7.5s9.75 3 12 7.5c-2.25 4.5-6.75 7.5-12 7.5s-9.75-3-12-7.5Zm9.75 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0Z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
              {/* Confirm Password Field */}
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  className="mt-1 w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={e => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <div className="flex gap-4 justify-center mt-2">
                <button
                  type="submit"
                  className="w-32 text-white py-2 rounded-md transition duration-200"
                  style={{ backgroundColor: '#2563EB' }}
                >
                  Register
                </button>
                <button
                  type="button"
                  className="w-32 text-gray-700 py-2 rounded-md border border-gray-300 transition duration-200 whitespace-nowrap"
                  onClick={() => setShowCreateForm(false)}
                >
                  Back to Login
                </button>
              </div>
              {createError && <p className="text-sm text-red-500 text-center mt-2">{createError}</p>}
            </form>
          </>
        )}
      </div>
    </div>

  );
};

export default Login;
