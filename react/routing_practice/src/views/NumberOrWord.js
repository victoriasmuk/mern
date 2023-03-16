import { useParams } from "react-router-dom";

export const NumberOrWord = (props) => {
    const {input} = useParams();
    let isNum = isNaN(+`${input}`);
    return (
        isNum ? <div>The word is: {input}</div> : <div>The number is: {input}</div> 
    )
};


