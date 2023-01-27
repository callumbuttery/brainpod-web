import React from "react"

interface childProps {
    onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SignInPrompt: React.FC<childProps> = (props) => {
    return (
        <div>
            <p className="text-sm font-light text-white">
                Already have an account?{" "}
                <button
                    className="font-medium text-primary-600 hover:underline text-primary-500"
                    onClick={props.onButtonClick}
                >
                    Sign in
                </button>
            </p>
        </div>
    )
}