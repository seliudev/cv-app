import type {EducationProps} from "../types";
import type {Dispatch, SetStateAction} from "react";

interface Props {
    data: EducationProps;
    setData: Dispatch<SetStateAction<EducationProps>>;
}

const Education = ({ data, setData }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <section className="bg-white p-6 rounded shadow border-2 border-green-600">
            <h2 className="text-xl font-semibold mb-4">Education</h2>

            <input
                name="school"
                value={data.school}
                onChange={handleChange}
                placeholder="School Name"
                className="w-full border rounded px-3 py-2 mb-3"
            />

            <input
                name="title"
                value={data.title}
                onChange={handleChange}
                placeholder="Title of Study"
                className="w-full border rounded px-3 py-2 mb-3"
            />

            <input
                name="date"
                value={data.date}
                onChange={handleChange}
                placeholder="Date of Study"
                className="w-full border rounded px-3 py-2"
            />
        </section>
    );
};

export default Education;
