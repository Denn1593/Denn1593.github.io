import { FC } from "react";

type DescriptionProps = {
    children: JSX.Element | JSX.Element[] | string;
    noMargin?: boolean;
}

export const Description: FC<DescriptionProps> = (props) => {

    const {
        children,
        noMargin,
    } = props;

    return <p className={"pl-6 text-xs text-primary font-normal " + (noMargin ? "" : "mb-2")}>
    {children}
</p>
}