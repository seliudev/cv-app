import { useState } from "react";

interface GeneralInfoProps {
    name: string;
    email: string;
    phone: string;
}

const GeneralInfo = () => {
    const [isEditing, setIsEditing] = useState<boolean>(true);

    const [info, setInfo] = useState<GeneralInfoProps>({
        name: "",
        email: "",
        phone: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <section className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold mb-4">General Information</h2>

            {isEditing ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        name="name"
                        value={info.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="email"
                        value={info.email}
                        onChange={handleChange}
                        placeholder="Email"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <input
                        name="phone"
                        value={info.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                    <p><strong>Name:</strong> {info.name}</p>
                    <p><strong>Email:</strong> {info.email}</p>
                    <p><strong>Phone:</strong> {info.phone}</p>
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

export default GeneralInfo;
