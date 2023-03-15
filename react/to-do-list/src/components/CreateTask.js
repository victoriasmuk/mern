import { useState } from "react";
import Stack from '@mui/material/Stack';
import { TextField } from "@mui/material";
import classes from './tasks.module.css';

export const CreateTask = (props) => {
    const[name, setName] = useState('');

    const handleNewTaskSubmit = (e) => {
        e.preventDefault();
        const newTask = {
            name:name,
            isComplete: false,
        };
        props.addNewTask(newTask);
        setName('');
    };

    return(
        <form onSubmit={(e) => {handleNewTaskSubmit(e);}} className={classes.form} >
            <Stack direction="row" alignItems="center" spacing={2}>
                <TextField id="outlined-basic" label="Task" variant="outlined" 
                    type="text"
                    value={name}
                    onChange={(e) => {setName(e.target.value);}}
                />
            <button>Add</button>
            </Stack>
        </form>
    );
};