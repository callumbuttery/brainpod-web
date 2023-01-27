import React from "react"

interface childProps{
    onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const ConfirmRegister: React.FC<childProps> = (props) => {
    return (
        <div>
            <button
                type="submit"
                onClick={props.onButtonClick}
                className="w-2/6 text-white bg-orange-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-10 text-center"
            >
                Register
            </button>
        </div>
    )
}