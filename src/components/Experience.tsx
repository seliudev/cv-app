import { useState } from "react";

interface ExperienceProps {
    company: string;
    position: string;
    responsibilities: string;
    from: string;
    to: string;
}

const Experience = () => {
    const [isEditing, setIsEditing] = useState<boolean>(true);

    const [experience, setExperience] = useState<ExperienceProps>({
        company: "",
        position: "",
        responsibilities: "",
        from: "",
        to: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setExperience({ ...experience, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">Practical Experience</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="company"
                        value={experience.company}
                        onChange={handleChange}
                        placeholder="Company Name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="position"
                        value={experience.position}
                        onChange={handleChange}
                        placeholder="Position Title"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <textarea
                        name="responsibilities"
                        value={experience.responsibilities}
                        onChange={handleChange}
                        placeholder="Main Responsibilities"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="flex gap-4">
                        <input
                            name="from"
                            value={experience.from}
                            onChange={handleChange}
                            placeholder="From"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                        <input
                            name="to"
                            value={experience.to}
                            onChange={handleChange}
                            placeholder="To"
                            className="w-full border border-gray-300 rounded px-3 py-2 focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 hover:cursor-pointer"
                    >
                        Submit
                    </button>
                </form>
            ) : (
                <div className="space-y-2">
                    <p><strong>Company:</strong> {experience.company}</p>
                    <p><strong>Position:</strong> {experience.position}</p>
                    <p><strong>Responsibilities:</strong> {experience.responsibilities}</p>
                    <p>
                        <strong>Duration:</strong> {experience.from} – {experience.to}
                    </p>
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

export default Experience;
