import { useState } from "react";

interface EducationProps {
    school: string;
    title: string;
    date: string;
}

const Education = () => {
    const [isEditing, setIsEditing] = useState<boolean>(true);

    const [education, setEducation] = useState<EducationProps>({
        school: "",
        title: "",
        date: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEducation({ ...education, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Education</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="school"
                        value={education.school}
                        onChange={handleChange}
                        placeholder="School Name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="title"
                        value={education.title}
                        onChange={handleChange}
                        placeholder="Title of Study"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="date"
                        value={education.date}
                        onChange={handleChange}
                        placeholder="Date of Study"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <div className="space-y-2">
                    <p><strong>School:</strong> {education.school}</p>
                    <p><strong>Title:</strong> {education.title}</p>
                    <p><strong>Date:</strong> {education.date}</p>
                    <button
                        onClick={() => setIsEditing(true)}
                        className="mt-4 text-blue-600 underline hover:cursor-pointer"
                    >
                        Edit
                    </button>
                </div>
            )}
        </section>
    );
};

export default Education;
