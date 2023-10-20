import React from "react";

interface BingoProps {
    num: number;
}
const Bingo: React.FC<BingoProps> = (props) => {
    return (
        <div className="circle-div">{props.num}</div>
    );
};

export default Bingo;