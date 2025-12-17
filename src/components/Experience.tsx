import type {ExperienceProps} from "../types";
import type {Dispatch, SetStateAction} from "react";

interface Props {
    data: ExperienceProps;
    setData: Dispatch<SetStateAction<ExperienceProps>>;
}

const Experience = ({ data, setData }: Props) => {
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <section className="bg-white p-6 rounded shadow border-2 border-green-600">
            <h2 className="text-xl font-semibold mb-4">Experience</h2>

            <input
                name="company"
                value={data.company}
                onChange={handleChange}
                placeholder="Company"
                className="w-full border rounded px-3 py-2 mb-3"
            />

            <input
                name="position"
                value={data.position}
                onChange={handleChange}
                placeholder="Position"
                className="w-full border rounded px-3 py-2 mb-3"
            />

            <textarea
                name="responsibilities"
                value={data.responsibilities}
                onChange={handleChange}
                placeholder="Responsibilities"
                className="w-full border rounded px-3 py-2 mb-3"
            />

            <div className="flex gap-3">
                <input
                    name="from"
                    value={data.from}
                    onChange={handleChange}
                    placeholder="From"
                    className="w-full border rounded px-3 py-2"
                />
                <input
                    name="to"
                    value={data.to}
                    onChange={handleChange}
                    placeholder="To"
                    className="w-full border rounded px-3 py-2"
                />
            </div>
        </section>
    );
};

export default Experience;
