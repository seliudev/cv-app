import GeneralInfo from "./components/GeneralInfo";
import Education from "./components/Education";
import Experience from "./components/Experience";

const App = () => {
    return (
        <main className="min-h-screen bg-gray-200 py-10">
            <div className="max-w-3xl mx-auto px-4 space-y-6">
                <h1 className="text-4xl font-bold text-center mb-6">
                    CV Builder
                </h1>

                <div className="space-y-6">
                    <GeneralInfo />
                    <Education />
                    <Experience />
                </div>
            </div>
        </main>
    );
};

export default App;
