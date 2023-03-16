import { useParams } from "react-router-dom";

export const ColorsWord = (props) => {
    const {input, textColor, bgColor} = useParams();
    let isNum = isNaN(+`${input}`);

    return(
        isNum ? <div style={{color:`${textColor}`, backgroundColor:`${bgColor}`}}>The word is: {input}</div> :  <div> Error! Please enter a word and colors!</div>
    )
};