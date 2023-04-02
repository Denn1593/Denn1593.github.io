import { FC } from "react"

type ListProps = {
    title: string,
    children: JSX.Element[] | JSX.Element
}

export const List: FC<ListProps> = (props) => {

    const {
        title,
        children,
    } = props;

    return (
        <div className="flex flex-col pb-2 w-full">
            <h1 className="border-b border-solid text-primary">{title}</h1>
            <div className="pl-4 pt-4">
                {children}
            </div>
        </div>
    )
}