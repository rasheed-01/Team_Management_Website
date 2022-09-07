
import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { updateStatus, closePopup, addNewTaskToProject } from '/redux/project/projectsSlice'

const StatusButton = (props) => {
    const statusList = useSelector((state) => state.allProjects.statusList)
    const dispatch = useDispatch();

    const statusIndex = statusList.findIndex((element) =>{
        return element.code === props.status
        })
        
        const [statusCounter, setStatusCounter] = useState((statusIndex>-1)? statusIndex : 0);

function onHandleClick(){
    if(statusList.length-1 >= statusCounter+1){
        dispatch(updateStatus([props.projectIndex, props.taskIndex, statusList[statusCounter+1].code]));
        setStatusCounter(statusCounter+1)

    }
    else{ 
        dispatch(updateStatus([props.projectIndex, props.taskIndex, statusList[0].code]));
        setStatusCounter(0)
    }
}



    return(
        <>
            <button variant="contained" className={`project-banner-content-status-button ${statusList[statusCounter].code != undefined &&statusList[statusCounter].code}`} onClick={onHandleClick} > {statusList[statusCounter].code}</button>
        </>
    );
}

export default StatusButton;