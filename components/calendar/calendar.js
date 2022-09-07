import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment';
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';

const CalendarOXA = () => {
    //redux state value display tasks on the calendar
    const projects = useSelector((state) => state.allProjects.projects)
    var tasksList = [];
    projects.map((project) => {
        tasksList = tasksList.concat(project.taskRow);
    });


    //m_NOTE: this method for return all dates between end and start dates for an event
    function getDatesInRange(startDate, endDate) {
        const date = new Date(startDate.getTime());
        // Exclude start date
        date.setDate(date.getDate() + 1);

        const datesRange = [];
        while (date < endDate) {
            datesRange.push({ "date": moment(new Date(date)).format("YYYY-MM-DD") });
            date.setDate(date.getDate() + 1);
        }
        return datesRange;
    }
    //m_NOTE:the method of marking the days on the calender
    const setClassName = (date) => {
        var isRange = false;
        var rangeTemp = false;
        var isStart = false;
        var isOne = false;
        const dateobj =
            tasksList.find((task) => {
                const dateRange = getDatesInRange(new Date(task.start), new Date(task.deadline))
                dateRange.map((element) => {
                    if (element.date === moment(date).format("YYYY-MM-DD")) {
                        isRange = true;
                        rangeTemp = true
                    }
                });
                if (rangeTemp) {
                    rangeTemp = false;
                    return task;
                }
                else if (!isRange && task.deadline == moment(date).format("YYYY-MM-DD") && task.start == moment(date).format("YYYY-MM-DD")) {
                    isOne = true;
                    return task;
                }
                else if (!isRange && task.deadline == moment(date).format("YYYY-MM-DD")) {
                    return task.deadline === moment(date).format("YYYY-MM-DD");
                }
                else if (!isRange && task.start == moment(date).format("YYYY-MM-DD")) {
                    isStart = true;
                    return task.start == moment(date).format("YYYY-MM-DD");
                }
            });
        return (isOne) ? `${dateobj.colorName} oneDate` : (isRange) ? `${dateobj.colorName} D` : (dateobj) ? ((isStart) ? `${dateobj.colorName} startDate` : `${dateobj.colorName} endDate`) : "";
    };

    //m_NOTE: this for showing a popup when day with task is clicked
    const [clickedDate, setClickedDate] = useState(null)
    //m_NOTE: this for save the triggered element
    const [anchorEl, setAnchorEl] = useState(null);

    function dayClicked(date, event) {
        if (event.currentTarget.className.toString().includes("D")) {
            setClickedDate(moment(new Date(date)).format("YYYY-MM-DD"));
            setAnchorEl(event.currentTarget);
        }
    }

    const handleClose = () => {
        setAnchorEl(null);
    };

    //this const for opning and closing the pop up
    const open = Boolean(anchorEl);
    return (
        <>
            <Calendar
                next2Label={null}
                prev2Label={null}
                formatShortWeekday={(local, date) => ['S', 'M', 'T', 'W', 'T', 'F', 'S'][date.getDay()]}
                calendarType={'ISO 8601'}
                tileClassName={({ activeStartDate, date, view }) => setClassName(date)}
                onClickDay={(date, event) => { dayClicked(date, event) }}
            />
            <div>
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
                    <div className={"arrow-box"}>
                        <Typography className="bold" align={"center"}> Date: {clickedDate}</Typography>
                        {tasksList.map(({ name, deadline, start }, index) => (
                            (clickedDate >= start && clickedDate <= deadline) &&
                            <div className={"calendar-popup"} key={index}>
                                <p sx={{ p: 2 }}><span className="bold">Title:</span> {name}</p>
                                <p sx={{ p: 2 }}><span className="bold">Assigned on:</span> {start}</p>
                                <p sx={{ p: 2 }}><span className="bold">Deadline:</span> {deadline}</p>
                                <div className={"break-to-center"}> <hr className={"divider"} /></div>
                            </div>
                        ))}
                    </div>
                </Popover>
            </div>
        </>
    );
}

export default CalendarOXA;
