import React from "react"

interface childProps {
    onButtonClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export const SignUpPrompt: React.FC<childProps> = (props) => {
    return (
        <div>
            <p className="text-sm font-light text-white">
                Don’t have an account yet?{" "}
                <button
                    className="font-medium text-primary-600 hover:underline text-primary-500"
                    onClick={props.onButtonClick}
                >
                    Sign up
                </button>
            </p>
        </div>
    )
}