import { CiDark } from "react-icons/ci";

export const Header = () => {
    return (
        <div className="bg-blue-500 text-white p-4">
            <h1 className="text-2xl font-bold">Where in the world?</h1>
            <p className="mt-2">
                <CiDark />
                Dark Mode</p>
        </div>
    );
};