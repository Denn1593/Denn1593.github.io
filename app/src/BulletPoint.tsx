import { FC } from "react";
import { IoStar, IoStarOutline } from 'react-icons/io5'

type BulletPointProps = {
    children: any,
    icon?: JSX.Element
    small?: boolean;
    rating?: number;
};

export const BulletPoint: FC<BulletPointProps> = (props) => {

    const {
        icon,
        children,
        small,
        rating
    } = props;

    return (
        <div className="flex flex-col w-full">
            <div className="flex items-center justify-between">
                <div className="flex items-center w-full">
                    {icon ?? <div className={"text-primary" + (small ? " text-sm" : "")}>&#9679;</div>}
                    <p className={"pl-4 text-primary w-full" + (small ? " text-xs" : "") + (icon ? " py-1" : "")}>
                        {children}
                    </p>
                </div>
                {
                    rating && (
                        <div className="flex">
                            {
                                Array.from(Array(5).keys()).map((r) => {
                                    return r < rating 
                                        ?   <IoStar color="#3B6E99" size={12}/>
                                        :   <IoStarOutline color="#3B6E99" size={12} />
                                })

                            }
                        </div>
                    )
                }
            </div>
        </div>
    )
        
    
}