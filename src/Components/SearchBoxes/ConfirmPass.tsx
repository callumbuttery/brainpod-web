import { Dispatch, SetStateAction } from "react";
import { InputChangeEventHandler } from "../../Types/InputChange";

interface props {
    setConfirmPass: Dispatch<SetStateAction<string>>
}

export const ConfirmPass: React.FC<props> = (setConfirmPass: props) => {

    const updatePass: InputChangeEventHandler = (event) => {
        setConfirmPass.setConfirmPass(event.target.value);
    }

    return (
        <div className="hover:scale-110">
            <label className="block mb-2 text-sm font-medium text-white">
                Confirm Password
            </label>
            <input
                type="password"
                name="password"
                id="password"
                placeholder="••••••••"
                className="bg-gray-500  text-white border-none sm:text-sm rounded-lg block w-full p-2.5"
                onChange={updatePass}
            />
        </div>
    );
};
