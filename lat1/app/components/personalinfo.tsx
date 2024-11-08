import React from 'react';

// Data objek MyInfos
const MyInfos = {
    ttl: "Bandung, 29 September 2004",
    gender: "Laki-laki",
    tinggiBadan: "175 cm",
    beratBadan: "88 kg",
    statusPernikahan: "Belum Menikah",
    whatsapp: "+62 812 3456 7890",
    email: "Karimansanusi10@email.com",
};

const PersonalInfo = () => {
    return (
        <section className="max-w-lg mx-auto p-6 bg-blue rounded-lg shadow-lg mt-8 border border-pink-700">
            <h2 className="text-2xl font-bold mb-4 text-pink-700 border-b pb-2">Personal Info</h2>
            <ul className="space-y-1">
                {Object.entries(MyInfos).map(([key, value]) => (
                    <li key={key} className="flex justify-between items-center p-2 hover:bg-pink-600 transition duration-200 rounded">
                        <span className="font-medium text-white-700">{key.replace(/([A-Z])/g, ' $1')}: </span>
                        <span className="text-white-700">{value}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default PersonalInfo;
