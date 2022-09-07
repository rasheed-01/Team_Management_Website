import { Typography } from '@mui/material';
import React, { useState } from 'react';
import TaskRow from './taskRow';
import StackedAvatar from './stackedAvatar';
import { useDispatch, useSelector } from 'react-redux'
import { resetEditProjectIndex, saveEdit } from '/redux/contexts/contextsSlice';
import StatusPopupWindow from './options/statusPopupWindow';
import ProjectBannnerOption from '/components/dashboard/projectBanner/options/projectBannerOption';
import AddNewTaskIcon from './options/addNewTaskIcon';
import DeleteDialog from './options/deleteDialog';





const ProjectBanner = (props) => {
    const reducContext = useSelector((state) => state.contextsMode);
    const isUpdating = reducContext.isEdit;
    const editedProject = reducContext.editProjectIndex;
    const dispatch = useDispatch();
    //m_ForTesting: this map for testing, in the futture will be deleted
    const avatars = [
        { avatar: "/images/avatar/female_avatar.png", name: "female" },
        { avatar: "/images/avatar/male_avatar.png", name: "male" },
    ]

    function onHandleSaveButton() {
        dispatch(resetEditProjectIndex());
        dispatch(saveEdit());
    }

    const [checked, setChecked] = React.useState(false);

    return (
        <>
            <div className="project-banner-header">
                <div className="project-banner-title">
                    <Typography className="project-banner-title-text"> {props.project.title}</Typography>
                    <StackedAvatar
                        avatars={avatars}
                        porjectIndex={props.projectIndex}
                    />
                </div>
                <div className="flex">
                    {(isUpdating && (editedProject == props.projectIndex)) &&
                        <div className="flex">
                            <DeleteDialog
                                projectIndex={props.projectIndex}
                                projectTitle={props.project.title}
                            />
                            <button className={"project-banner-header-btn project-banner-header-save-btn-hover project-banner-header-save-btn"} onClick={onHandleSaveButton}>SAVE</button>
                        </div>}
                    <ProjectBannnerOption
                        projectIndex={props.projectIndex}
                        projectTitle={props.project.title}
                    />
                </div>
            </div>
            <div className="project-banner-content grid-cols-7 gap-4">
                <div className="col-span-3 project-banner-content-column-alignment">
                    <Typography> Tasks</Typography>
                </div>
                <div className="col-span-1 project-banner-content-column-alignment">
                    <Typography> Members</Typography>
                </div>
                <div className="flex col-span-1 project-banner-content-column-alignment">
                    <Typography> Status</Typography>
                    <StatusPopupWindow />
                </div>
                <div className="col-span-2  project-banner-content-column-alignment">
                    <Typography> Deadline</Typography>
                </div>
            </div>
            <div id={"tasksList"}>
            
                {props.project.taskRow.map((task, index) => (
                
                    <div key={index}>
                        <TaskRow
                            projectIndex={props.projectIndex}
                            taskIndex={index}
                            task={task}
                        />
                    </div>
                ))}

                {(!isUpdating && !(editedProject == props.projectIndex)) &&
                    <div className="flex">
                        <AddNewTaskIcon
                            projectIndex={props.projectIndex}
                        />     
                    </div>}

            </div>


        </>
    );
}


export default ProjectBanner;
