"use client";
import React, { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState(0);
    const [submitted, setSubmitted] = useState(false);
    const [averageRating, setAverageRating] = useState(0);
    const [totalRatings, setTotalRatings] = useState(0);
    const [ratingCount, setRatingCount] = useState(0);

    const handleSubmit = (e:React.FormEvent) => {
        e.preventDefault();
        
        // Update total ratings and count
        const newTotal = totalRatings + rating;
        const newCount = ratingCount + 1;
        
        setAverageRating(Number((newTotal / newCount).toFixed(1)));
        setTotalRatings(newTotal);
        setRatingCount(newCount);
        
        setSubmitted(true);
    };

    const handleClear = () => {
        setName('');
        setEmail('');
        setMessage('');
        setRating(0);
        setSubmitted(false);
    };

    return (
        <div className="border border-pink-700 max-w-md mx-auto mt-10 p-6 bg-black - rounded-lg shadow-lg text-black"  >
            {!submitted ? (
                <form onSubmit={handleSubmit}>
                    <h2 className="text-2xl font-bold mb-4 text-center text-white">Contact Form</h2>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Nama:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 border border-pink-700 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Email:</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 border border-pink-700 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Pesan:</label>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="mt-1 block w-full p-2 border border-pink-700 rounded-md focus:ring focus:ring-blue-500 focus:outline-none"
                            
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-medium text-white">Rating:</label>
                        <div className="flex space-x-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <svg
                                    key={star}
                                    onClick={() => setRating(star)}
                                    className={`h-6 w-6 cursor-pointer ${rating >= star ? 'text-yellow-500' : 'text-white'}`}
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M10 15l-5.878 3.09 1.122-6.568L.246 7.174l6.681-.974L10 1l2.073 5.2 6.681.974-4.998 4.348 1.122 6.568z" />
                                </svg>
                            ))}
                        </div>
                    </div>
                    <div className="flex justify-between mt-6">
                        <button 
                            type="submit" 
                            className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-200"
                        >
                            Submit
                        </button>
                        <button 
                            type="button" 
                            onClick={handleClear} 
                            className="bg-white text-gray-700 font-bold py-2 px-4 rounded hover:bg-gray-400 transition duration-200"
                        >
                            Clear
                        </button>
                    </div>
                </form>
            ) : (
                <div className="mt-4 text-lg text-white text-center">
                    Nama: <span className="font-semibold">{name}</span><br />
                    Email: <span className="font-semibold">{email}</span><br />
                    Pesan: <span className="font-semibold">{message}</span>, <br />
                    Rating: <span className="font-semibold">{rating} Star{rating > 1 ? 's' : ''}</span>, <br />
                    Data di atas akan segera diinput ke database. Terima kasih! <br />
                    <div className="mt-4 text-blue-500">Average Rating: {averageRating ? `${averageRating} Stars` : 'No ratings yet'}</div>
                </div>
            )}
        </div>
    );
};

export default ContactForm;
