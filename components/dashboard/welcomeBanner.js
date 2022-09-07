import UseWindowSize from "/components/facilities/windowSize";
import { Typography } from "@mui/material";
import Image from "next/image";

const WelcomeDashboard = () =>{
    const width = UseWindowSize().width;
    //for disabling the the scrolable part in mobile
    const sm = 768;

    return(
        <>
        <div className="grid grid-cols-9 welcome-dashboard-div">
                    <div className="welcome-dashboard-message-container col-span-6">
                    <div className="welcome-dashboard-message ">
                    <Typography className="welcome-dashboard-text">Good Morning MVP!</Typography>
                    <Typography className="welcome-dashboard-pragraph">Dont Forget to check your Pending Tasks! and Claim Your Rewards!</Typography>
                    </div>
                    </div>
                    <div className='col-span-2'>
                    <div className="relative  w-full h-full">
                    <Image
                    className={(width>sm)? "overflow-img": " "}
                    priority
                    src="/images/wizard.png"
                    layout="fill"
                    quality={100}
                    alt={'OXA'}
                />
                
                </div>
                    </div>
                    
                </div>

        </>
    );
}

export default WelcomeDashboard;
