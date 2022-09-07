import { IconButton, Typography } from '@mui/material';
import React, { useState } from 'react';
import { BsArrowLeft, BsPatchQuestion } from 'react-icons/bs';
import Popover from '@mui/material/Popover';
import { useSelector } from 'react-redux'
import Tooltip from '@mui/material/Tooltip'
import TooltipOXA from '/components/facilities/tooltip';

//m_NOTE: this file for the popup window of task status in the project banner

const StatusPopupWindow = () => {
    const statusList = useSelector((state) => state.allProjects.statusList)

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
    return (
        <>
            <TooltipOXA title={"status info"}>
                <IconButton onClick={handleClick} ariant="contained" aria-describedby={id}>
                    <BsPatchQuestion size={15} className="project-banner-question-icon" />
                </IconButton>
                </TooltipOXA>    
            
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                PaperProps={{
                    style: {
                        backgroundColor: "transparent",
                        boxShadow: "none",
                        borderRadius: 0,
                    }
                }}>
                <div className={"arrow-box-status"}>
                    <Typography className="bold" align={"center"}> Status Info</Typography>
                    {statusList.map(({ code, desc }, index) => (
                    
                            <div className={"grid grid-cols-5  calendar-popup status-style"} key={index}>
                                <div className=" col-span-1 code-box"><p sx={{ p: 2 }} className={`code-box ${code}`}>{code}</p></div>
                                <div className="col-span-1"><p sx={{ p: 2, }} className={"status-arrow"}> {`<-`} </p></div>
                                <div className="col-span-3"><p sx={{ p: 2 }} className={"bold"}> {desc}</p></div>
                                <div className={"break-to-center col-span-5"}> <hr className={"divider-taller"} /></div>
                            </div>
                        
                        
                    ))}
                </div>
            </Popover>
        </>
    );

}

export default StatusPopupWindow;