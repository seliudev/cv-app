import type {
    GeneralInfoProps,
    EducationProps,
    ExperienceProps,
} from "../types";

interface Props {
    generalInfo: GeneralInfoProps;
    education: EducationProps;
    experience: ExperienceProps;
    onEdit: () => void;
}

const ResumePreview = ({
                           generalInfo,
                           education,
                           experience,
                           onEdit,
                       }: Props) => {
    return (
        <div className="bg-white p-8 rounded shadow">
            <h2 className="text-3xl font-bold mb-6">{generalInfo.name}</h2>

            <p className="mb-4 text-gray-700">
                {generalInfo.email} | {generalInfo.phone}
            </p>

            <section className="mb-6">
                <h3 className="text-xl font-semibold">Education</h3>
                <p>{education.school}</p>
                <p>{education.title}</p>
                <p>{education.date}</p>
            </section>

            <section className="mb-6">
                <h3 className="text-xl font-semibold">Experience</h3>
                <p className="font-semibold">{experience.company}</p>
                <p>{experience.position}</p>
                <p>{experience.responsibilities}</p>
                <p>
                    {experience.from} – {experience.to}
                </p>
            </section>

            <button
                onClick={onEdit}
                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:cursor-pointer hover:bg-blue-700"
            >
                Edit Resume
            </button>

        </div>
    );
};

export default ResumePreview;
