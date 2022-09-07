import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { BsThreeDots } from "react-icons/bs";
import Popover from '@mui/material/Popover';
import { useSelector, useDispatch } from 'react-redux'
import { createNewProject, } from '/redux/project/projectsSlice'
import { closePopup, openPopup } from '/redux/contexts/contextsSlice'

function CreateNewProject(props) {
    //redux state
    const statePopup = useSelector((state) => state.contextsMode.popup)
    const dispatch = useDispatch();

    const [projectTitle, setProjectTitle] = useState("");
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        dispatch(openPopup());
    };

    const handleClose = () => {
        setAnchorEl(null);
        dispatch(closePopup());
    };

    const open = (statePopup) && Boolean(anchorEl);
    const id = open ? `simple-popover ${props.title}` : undefined;



    function onHandleCreateButton() {
        dispatch(createNewProject(projectTitle));
        dispatch(closePopup());
    }

    return (
        <>
            <div>
                <MenuItem aria-label="settings" aria-describedby={id} variant="contained" onClick={handleClick}>Create New Project</MenuItem>
                <Popover
                    id={id}
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                >
                    <div className="project-square-card-projects-div">
                        <input
                            className="project-banner-task-field-input project-square-card-projects-input"
                            placeholder={"Project Title"}
                            value={projectTitle}
                            onChange={(title) => setProjectTitle(title.target.value)}
                        />
                        <button className={"project-square-card-create-btn"} onClick={onHandleCreateButton}>CREATE</button>
                    </div>
                </Popover>
            </div>

        </>
    );
}


export default function ProjectSquareCardOption(props) {
    const statePopup = useSelector((state) => state.contextsMode.popup)
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
        dispatch(openPopup());
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = (statePopup) && Boolean(anchorEl);
    const id = open ? `simple-popover ${props.title}` : undefined;

    return (
        <div>
            <IconButton aria-label="settings" aria-describedby={id} variant="contained" onClick={handleClick}>
                <BsThreeDots />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <CreateNewProject
                />
                <MenuItem>option 2</MenuItem>
            </Popover>
        </div>
    );
}
