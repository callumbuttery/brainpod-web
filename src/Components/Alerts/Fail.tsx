interface childProps {
    text: string,
    show: boolean,
}

export const Fail: React.FC<childProps> = (props) => {
    if (props.show) {
        return (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">Holy smokes! - </strong>
                <span className="block sm:inline">{props.text}</span>
            </div>
        )
    } else {
        return (
            <div>

            </div>
        )
    }
}