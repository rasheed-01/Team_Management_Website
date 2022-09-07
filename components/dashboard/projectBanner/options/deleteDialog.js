import { Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux'
import { resetEditProjectIndex, saveEdit } from '/redux/contexts/contextsSlice';
import { deleteProject } from '/redux/project/projectsSlice';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Stack from '@mui/material/Stack';
import { closePopup, openPopup } from '/redux/contexts/contextsSlice'
import { GrClose } from "react-icons/gr";
import Grid from '@mui/material/Grid';


const DeleteDialog = (props) =>{
        //redux state
        const dispatch = useDispatch();
    
        const [open, setOpen] = useState(false);
    
        const handleClickOpen = () => {
            setOpen(true);
        };
    
        const handleClose = () => {
            setOpen(false);
            dispatch(closePopup());
        };
    
        function onHandleDeleteButton() {
            dispatch(deleteProject(props.projectIndex));
            dispatch(resetEditProjectIndex());
            dispatch(saveEdit());
        }
    
        return (
            <>
                <MenuItem className={"project-banner-header-btn project-banner-header-delete-btn-hover project-banner-header-delete-btn"} onClick={handleClickOpen}>DELETE</MenuItem>
                <div>
                    <Dialog
                        open={open}
                        onClose={handleClose}
                        fullWidth
                    >
                        <div className="add-task-to-center">
                            <DialogTitle>
                                <Grid container
                                    direction="row"
                                    justifyContent="space-between"
                                    alignItems="center">
                                    <Typography variant="div">Delete Project</Typography>
                                    <IconButton onClick={handleClose}>
                                        <GrClose />
                                    </IconButton>
                                </Grid>
                            </DialogTitle>
    
                            <DialogContent className="add-task-to-center full-width">
    
                                <Stack spacing={3}>
                                    <label className="new-task-label" htmlFor="name">do you wnat to delete <span className="bold">{props.projectTitle}</span> project?</label>
                                    <div className="project-banner-header-delete-dialog-btns">
                                        <button className={"project-banner-header-btn project-banner-header-save-btn-hover project-banner-header-save-btn"} onClick={handleClose}>Cancel</button>
                                        <button className={"project-banner-header-btn project-banner-header-delete-btn-hover project-banner-header-delete-btn"} onClick={onHandleDeleteButton}>Delete</button>
                                    </div>
                                </Stack>
    
                            </DialogContent>
                        </div>
                    </Dialog>
                </div>
            </>
        );
    

}

export default DeleteDialog;