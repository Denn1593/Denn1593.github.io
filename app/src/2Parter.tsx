import { FC } from "react"

type ParterProps = {
    dates: string,
    content: string,
}

export const Parter: FC<ParterProps> = (props) => {

    const {
        dates,
        content,
    } = props;

    return (
        <div className="flex justify-between grow">
            <div className="text-primary">{content}</div>
            <div className="text-primary">{dates}</div>
        </div>
    )
}