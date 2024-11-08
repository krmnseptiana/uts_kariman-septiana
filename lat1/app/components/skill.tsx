import React from 'react';

// Data array Skills dengan persentase
const skills = [
    { name: "HTML", level: 80 },
    { name: "React", level: 75 },
    { name: "JavaScript", level: 65 },
   
];

const Skills = () => {
    return (
        <section className="max-w-lg mx-auto p-5 bg-pink rounded-lg shadow-lg mt-8 border border-pink-700">
            <h2 className="text-2xl font mb-5 text-pink-700 border-b pb-2">My Skill</h2>
            <ul className="space-y-2">
                {skills.map((skill, index) => (
                    <li key={index} className="flex flex-col">
                        <div className="flex justify-between mb-2">
                            <span className="text-white-700 font-semibold">{skill.name}</span>
                            <span className="text-white-700">{skill.level}%</span>
                        </div>
                        <div className="relative w-full h-4 bg-pink-200 rounded">
                            <div 
                                className="absolute h-full bg-pink-700 rounded" 
                                style={{ width: `${skill.level}%` }} 
                            ></div>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
