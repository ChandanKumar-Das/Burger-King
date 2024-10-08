import React, { useState, useContext } from 'react';
import { AppContext } from '../context/Appcontext';

const Auth = () => {
    const { user, signUp, logIn, logOut, errorMessage } = useContext(AppContext);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [formType, setFormType] = useState('login'); 
    const [emailError, setEmailError] = useState(''); 

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formType === 'signup') {
            if (!validateEmail(email)) {
                setEmailError('Invalid email format');
                return;
            } else {
                setEmailError(''); 
            }
            if (signUp(email, username, password)) {
                setFormType('login'); 
            }
        } else {
            if (logIn(username, password)) {
                setUsername('');
                setPassword('');
            }
        }
    };

    const toggleFormType = () => {
        setFormType((prev) => (prev === 'login' ? 'signup' : 'login'));
        setUsername('');
        setPassword('');
        setEmail('');
        setEmailError(''); 
    };

    return (
        <div className="App flex items-center justify-center min-h-screen bg-gray-100">
            {user ? (
                <div className="bg-white p-8 rounded shadow-lg text-center">
                    <h2 className="text-2xl font-semibold mb-4">Welcome, {user.username}!</h2>
                    <button
                        onClick={logOut}
                        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                    >
                        Log Out
                    </button>
                </div>
            ) : (
                <div className="bg-white p-8 rounded shadow-lg w-96">
                    <h2 className="text-2xl font-semibold mb-6 text-center">
                        {formType === 'login' ? 'Log In' : 'Sign Up'}
                    </h2>
                    <form onSubmit={handleSubmit} className="flex flex-col">
                        {formType === 'signup' && (
                            <>
                                <input
                                    type="text"
                                    placeholder="Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                                {emailError && <p className="text-red-500">{emailError}</p>}
                            </>
                        )}
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            className="mb-4 p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            type="submit"
                            className="w-full py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
                        >
                            {formType === 'login' ? 'Log In' : 'Sign Up'}
                        </button>
                        {errorMessage && <p className="mt-4 text-red-500 text-center">{errorMessage}</p>}
                    </form>
                    <p className="mt-4 text-center">
                        {formType === 'login' ? "Don't have an account?" : 'Already have an account?'}
                        <button
                            onClick={toggleFormType}
                            className="text-blue-500 font-semibold hover:underline ml-1"
                        >
                            {formType === 'login' ? 'Sign Up' : 'Log In'}
                        </button>
                    </p>
                </div>
            )}
        </div>
    );
};

export default Auth;
