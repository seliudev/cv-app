import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";
import ResumePreview from "./components/ResumePreview";
import type {
    GeneralInfoProps,
    EducationProps,
    ExperienceProps,
} from "./types";

const App = () => {
    const [generalInfo, setGeneralInfo] = useState<GeneralInfoProps>({
        name: "",
        email: "",
        phone: "",
    });

    const [education, setEducation] = useState<EducationProps>({
        school: "",
        title: "",
        date: "",
    });

    const [experience, setExperience] = useState<ExperienceProps>({
        company: "",
        position: "",
        responsibilities: "",
        from: "",
        to: "",
    });

    const [showPreview, setShowPreview] = useState<boolean>(false);

    return (
        <main className="min-h-screen bg-gray-100 py-10">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-center mb-8 title font-title italic text-green-600">
                    CV Builder
                </h1>

                {!showPreview ? (
                    <div className="space-y-6">
                        <GeneralInfo data={generalInfo} setData={setGeneralInfo} />
                        <Education data={education} setData={setEducation} />
                        <Experience data={experience} setData={setExperience} />

                        <button
                            onClick={() => setShowPreview(true)}
                            className="w-full bg-green-600 text-white py-3 rounded text-lg hover:bg-green-700 hover:cursor-pointer"
                        >
                            Preview Resume
                        </button>
                    </div>
                ) : (
                    <ResumePreview
                        generalInfo={generalInfo}
                        education={education}
                        experience={experience}
                        onEdit={() => setShowPreview(false)}
                    />
                )}
            </div>
        </main>
    );
};

export default App;
