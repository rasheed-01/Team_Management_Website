import Tooltip from '@mui/material/Tooltip'

/*
 * <SUMMARY>
 * the toolTip component
 * you need to pass only a props called (title) to display the tip
 * e.g.  
 *      <TooltipOXA title="exmple">
 *      </TooltipOXA>
 * </SUMMARY>
 */

const TooltipOXA = (props) =>{
    return (
        <>
             <Tooltip 
            title={props.title} 
            TransitionProps={{ timeout: 900 }}
            enterDelay={300}
            arrow
            >
            {props.children}

            </Tooltip>
        </>
    );
}

export default TooltipOXA;
