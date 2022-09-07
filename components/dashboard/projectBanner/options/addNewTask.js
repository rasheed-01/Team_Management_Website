import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import { BsThreeDots } from "react-icons/bs";
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Stack from '@mui/material/Stack';
import moment from 'moment';
import { Checkbox } from '@mui/material';
import { useSelector, useDispatch } from 'react-redux'
import { addNewTaskToProject, } from '/redux/project/projectsSlice'
import { closePopup, openPopup } from '/redux/contexts/contextsSlice'
import { GrClose } from "react-icons/gr";
import Grid from '@mui/material/Grid';
import Typography from "@mui/material/Typography";


const AddNewTaskForm = (props) => {
    //redux state
    const dispatch = useDispatch();

    var colorList = ["red", "pink", "blue", "green", "yellow", "purple", "orange",]
    // give random color to the tasks or events in the calendar
    function getRandomColor(list) {
        return list[Math.floor((Math.random() * list.length))];
    }
    const randomColor = getRandomColor(colorList);

    //new task form
    const { register, control, handleSubmit } = useForm();
    const onSubmit = (data) => {
        if (checked) {
            data.start = moment(startDate).format("YYYY-MM-DD");
        }
        else {
            data.start = moment(startDate).format("YYYY-MM-DD");
            data.deadline = moment(startDate).format("YYYY-MM-DD");
        }
        dispatch(addNewTaskToProject(data));
        dispatch(closePopup());
    };

    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        dispatch(closePopup());
    };

    //date picker
    const [startDate, setStartDate] = useState(new Date());
    //this tempStartDate is for set the min date that can be used for end date
    const tempStartDate = new Date(startDate.getTime());
    tempStartDate.setDate(startDate.getDate() + 1);
    const [deadlineDate, setDeadlineDate] = useState(new Date(startDate.getTime()));
    //check box 
    const label = { inputProps: { 'aria-label': 'Checkbox for deadline' } };
    const [checked, setChecked] = useState(false);

    return (
        <>
            <MenuItem onClick={handleClickOpen}>Add New Task</MenuItem>
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
                                <Typography variant="div">Add New Task</Typography>
                                <IconButton onClick={handleClose}>
                                    <GrClose />
                                </IconButton>
                            </Grid>
                        </DialogTitle>

                        <DialogContent className="add-task-to-center full-width">
                            <form id="addNewTaskForm" className="new-task" onSubmit={handleSubmit(onSubmit)}>
                                <label className="new-task-label" htmlFor="name">To add task on the calendar fill the below fields</label>
                                <Stack spacing={3}>
                                    <TextField
                                        label="Title"
                                        inputProps={{
                                            minLength: 4,
                                            maxLength: 40,
                                            type: "text",
                                            required: "required"
                                        }}
                                        {...register("name")}
                                    />
                                    <LocalizationProvider dateAdapter={AdapterDateFns}>
                                        <Controller
                                            control={control}
                                            name="start"
                                            render={({
                                                field: { onChange }, }) => (
                                                <DatePicker
                                                    onMonthChange={(date) => { tempStartDate.setDate(date.getDate() + 1); }}
                                                    label={(checked) ? "Start Date" : "Deadline"}
                                                    value={startDate}
                                                    onChange={(date) => {
                                                        setStartDate(date)
                                                        onChange(moment(date).format("YYYY-MM-DD"));
                                                        tempStartDate.setDate(date.getDate() + 1);
                                                    }}
                                                    minDate={moment().toDate()}
                                                    inputFormat={"yyyy-MM-dd"}
                                                    renderInput={(params) => <TextField {...params}
                                                    />}
                                                />
                                            )}
                                        />
                                    </LocalizationProvider>
                                    {(checked) &&
                                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                                            <Controller
                                                control={control}
                                                name="deadline"
                                                render={({
                                                    field: { onChange }, }) => (
                                                    <DatePicker
                                                        label={"Deadline Date"}
                                                        value={deadlineDate}
                                                        onChange={(date) => {
                                                            setDeadlineDate(date)
                                                            onChange(moment(date).format("YYYY-MM-DD"));
                                                        }}
                                                        minDate={tempStartDate}
                                                        inputFormat={"yyyy-MM-dd"}
                                                        renderInput={(params) => <TextField {...params}
                                                            helperText="the end date should be after start date"
                                                        />}
                                                    />
                                                )}
                                            />
                                        </LocalizationProvider>}
                                    <input type={"hidden"} {...register("colorName")} value={randomColor} />
                                    <input type={"hidden"} {...register("index")} value={props.projectIndex} />
                                    <div className="check-box ">
                                        <Checkbox {...label}
                                            onChange={() => setChecked(!checked)}
                                        />
                                        <div className="check-box-text">
                                            <p>make the task display in range</p>
                                        </div>
                                    </div>
                                    {(deadlineDate > startDate || !checked) ?
                                        <button className="new-tasks-button" type="submit">Add Task</button> :
                                        <p className="new-tasks-button-unvalid">Add Task</p>}
                                </Stack>
                            </form>
                        </DialogContent>
                    </div>
                </Dialog>
            </div>
        </>
    );
}

export default AddNewTaskForm;