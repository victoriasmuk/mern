import React from "react";
import classes from './form.module.css';

const Form = (props) => {
    const { boxDetails, setBoxDetails } = props;
    const { boxes, setBoxes } = props;
    const onChange = (e) => {
        setBoxDetails({
            ...boxDetails,
            [e.target.name]: e.target.value,
        })
    }
    const createBox = (e) => {
        e.preventDefault();
        setBoxes(boxes =>
            [...boxes, {'color': boxDetails.color, 'size': boxDetails.size}]
            );
    }

    return(
        <form onSubmit={createBox}>
            <div className={classes.form}>
                {/* change color */}
                <label htmlFor="color">Color</label>
                <input type="text" name="color" onChange={onChange} />
                {/* change size */}
                <label htmlFor="size">Size</label>
                <input type="text" name="size" onChange={onChange} />
                <button value='color'>Add!</button>
            </div>
        </form>
    )
}

export default Form;