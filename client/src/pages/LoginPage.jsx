import React, { useState } from 'react';
import { redirect } from 'react-router-dom';
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const obj = {
      email: e.target.email.value,
      password: e.target.password.value,
    };

    try {
      const response = await fetch('http://localhost:5000/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(obj),
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-2">
      <h1 className="text-2xl font-bold">Log in</h1>
      {error && <span>{error}</span>}
      <form className="flex flex-col gap-4 " onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="email">Enter email:</label>
        <input
          className="py-2 "
          type="email"
          name="email"
          required
          id="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Enter password:</label>
        <input
          className="py-2 "
          name="password"
          type="password"
          required
          id="password"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="p-4 bg-blue-300">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
