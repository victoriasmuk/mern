import Stack from '@mui/material/Stack';
import classes from './tasks.module.css';

export const OneTask = (props) => {
    const { task, handleTaskCompleteClick, taskIdx, handleTaskDeleteClick } = props;

    return(
        <Stack direction="row" alignItems="center" spacing={2} className={classes.form}>
            {task.isComplete ? <h3 style={{textDecorationLine: 'line-through'}}>{task.name}</h3> : <h3>{task.name}</h3>}
            <input 
                type="checkbox"
                onChange={(e) => {handleTaskCompleteClick(taskIdx);}}
                checked={task.isComplete}
            />
            <button onClick={(e) => {handleTaskDeleteClick(e, taskIdx);}}>
                Delete
            </button>
        </Stack>
    );
};