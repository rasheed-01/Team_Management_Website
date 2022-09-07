import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { BsThreeDots } from "react-icons/bs";
import Image from 'next/image';
import ProjectSquareCardOption from './options/projectSquareCardOptions';


const SmallCard = ({ title, num, img2 }) => {
    return (

        <Card className={"card"}>
            <CardHeader
                subheader={title}
                sx={{ padding: '1px' }}
                action={
                    ((title == "Projects")?
                        <ProjectSquareCardOption/>
                    : <IconButton aria-label="settings">
                        <BsThreeDots />
                    </IconButton>
                    )}
                
            />
            <CardContent className={"card-content"}
                sx={{ padding: '1px 1px 1px' }}
            >
                <div className="card-content-align-items grid-cols-2">
                    <div className=" col-span-1">
                        <Typography className="card-num" variant="h2" color="text.secondary">
                            {num}
                        </Typography>
                    </div>
                    <div className="col-span-1">
                        <Image
                            className={'cursor-pointer'}
                            priority
                            src={img2}
                            layout="responsive"
                            quality={100}
                            width="100%"
                            height="100%"
                            alt={'OXA'}
                        />
                    </div>
                </div>
            </CardContent>
        </Card>


    );
}
export default SmallCard;
