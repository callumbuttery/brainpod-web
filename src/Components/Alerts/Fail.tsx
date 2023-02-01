interface childProps {
    text: string,
}

export const Fail: React.FC<childProps> = (props) => {
    return (
        <div className="bg-red-500 border border-red-400 text-white px-4 py-3 rounded relative" role="alert">
            <span className="block sm:inline">{props.text}</span>
        </div>
    )
}