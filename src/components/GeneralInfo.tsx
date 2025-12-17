import type {GeneralInfoProps} from "../types";

interface Props {
    data: GeneralInfoProps;
    setData: React.Dispatch<React.SetStateAction<GeneralInfoProps>>;
}

const GeneralInfo = ({ data, setData }: Props) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setData({ ...data, [e.target.name]: e.target.value });
    };

    return (
        <section className="bg-white p-6 rounded shadow border-2 border-green-600">
            <h2 className="text-xl font-semibold mb-4">General Information</h2>
            <input
                name="name"
                value={data.name}
                onChange={handleChange}
                placeholder="Name"
                className="w-full border rounded px-3 py-2 mb-3"
            />
            <input
                name="email"
                value={data.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full border rounded px-3 py-2 mb-3"
            />
            <input
                name="phone"
                value={data.phone}
                onChange={handleChange}
                placeholder="Phone"
                className="w-full border rounded px-3 py-2"
            />
        </section>
    );
};

export default GeneralInfo;
