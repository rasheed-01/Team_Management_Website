import { Avatar, FilledInput, TextField, Typography } from '@mui/material';
import moment from 'moment';
import { useState } from 'react';
import StatusButton from './statusButton';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { useSelector, useDispatch } from 'react-redux'
import { updateTaskTitle, updateTaskDeadline, deleteTask } from '/redux/project/projectsSlice'
import IconButton from '@mui/material/IconButton';
import { AiOutlineDeleteRow } from "react-icons/ai";
import TooltipOXA from '/components/facilities/tooltip';



const TaskRow = (props) => {

    const reducContext = useSelector((state) => state.contextsMode);
    /*
     * m_NOTE: These two consts are for checking whether the update 
     *  option clicked and which projectwill be updated
     */
    const isUpdating = reducContext.isEdit;
    const editedProject = reducContext.editProjectIndex;
    const dispatch = useDispatch();
    //m_ForTesting: this const only for testing
  
    const avatars = [
        { avatar: "/images/avatar/female_avatar.png", name: "female" },
        { avatar: "/images/avatar/male_avatar.png", name: "male" },
    ]

    const selectedTask = useSelector((state) => state.allProjects.projects[props.projectIndex].taskRow[props.taskIndex]);
    //console.log(selectedTask.member)
    const avatar = avatars.findIndex((element) => {
        if(selectedTask.length >0){
        return  element.name === selectedTask.member}
      
    })

    return (
        <>
            <div className=" project-banner-content-task-row grid grid-cols-7 gap-4">
                <div className="col-span-3 project-banner-content-column-alignment">
                    {(isUpdating && (editedProject == props.projectIndex)) &&
                    <TooltipOXA title="delete task">
                        <IconButton
                            className="project-banner-content-delete-task-icon"
                            onClick={() => { dispatch(deleteTask([props.projectIndex, props.taskIndex])) }}>
                            <AiOutlineDeleteRow size={33} />
                        </IconButton>
                        </TooltipOXA>}
                    <TextField
                        className="project-banner-task-field-input"
                        value={selectedTask.name || " "}
                        onChange={(data) => {
                            //setTask(data.target.value)
                            dispatch(updateTaskTitle([props.projectIndex, props.taskIndex, data.target.value]))
                        }}
                        placeholder="Task..."
                        variant="filled"
                        InputProps={{ disableUnderline: true }}
                        inputProps={{ readOnly: (!isUpdating || !(editedProject == props.projectIndex)), className: "project-banner-task-field-input" }}
                    />
                </div>
                <div className="col-span-1 project-banner-content-column-alignment">
                    <Avatar
                        alt={(avatar >= 0) ? avatars[avatar].name : ""}
                        src={(avatar >= 0) ? avatars[avatar].avatar : ""}
                    />
                </div>
                <div className="col-span-1 project-banner-content-column-alignment">
                    <StatusButton
                        status={selectedTask.code}
                        taskIndex={props.taskIndex}
                        projectIndex={props.projectIndex}
                    />
                </div>
                <div className="col-span-2  project-banner-content-column-alignment">
                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                        <DatePicker
                            readOnly={(!isUpdating || !(editedProject == props.projectIndex))}
                            value={selectedTask.deadline}
                            onChange={(data) => {
                                dispatch(updateTaskDeadline([props.projectIndex, props.taskIndex, moment(data).format("yyyy-MM-DD")]))
                            }}
                            minDate={new Date(selectedTask.start)}
                            inputFormat={"yyyy-MM-dd"}
                            renderInput={(params) => (!isUpdating || !(editedProject == props.projectIndex)) ? <TextField {...params}
                                InputProps={{ disableUnderline: true, className: "project-banner-deadline-field" }}
                                variant="filled"
                            /> :
                                <TextField {...params}
                                    variant="filled"
                                />

                            }
                        />
                    </LocalizationProvider>
                </div>
            </div>
        </>
    );

}


export default TaskRow;
