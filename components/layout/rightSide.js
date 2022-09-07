import Link from "next/link";
import { IconContext } from "react-icons";
import { BsArrowRightShort, BsChatLeftText } from "react-icons/bs";
import CalendarOXA from "../calendar/calendar";



const RightSide = () => {
    const notes = [
        {
            title: "Check-Email"
        },
        {
            title: "Meeting with Leaders"
        },
        {
            title: "Check Tasks"
        },
    ]
    return (<aside className={"side-right"}>
        <div className="grid grid-rows-2 gap-10 min-h-screen">
            <div className="row-span-1">
                <div className='grid grid-cols-7 gap-4'>
                    <div className="col-start-2 col-span-5">
                        <h1 className=' text-center'></h1>
                    </div>
                    <div className='div-clendar col-start-1 col-span-7'>
                        <CalendarOXA />
                    </div>
                </div>
            </div>
            <div className=" notes-margin row-end-3 row-span-1">
                <div className='text-color-notes grid grid-cols-3'>
                    <p className="col-span-1">My Notes</p>
                    <Link href={"/dashboard"}>
                        <div className="col-span-1 col-end-4">
                            <span className=" flex toRight">
                                <p className=" cursor-pointer inline">view all</p>
                                <IconContext.Provider value={{ className: "rightside-arrow-icon cursor-pointer inline" }}>
                                    <BsArrowRightShort />
                                </IconContext.Provider>
                            </span>
                        </div>
                    </Link>
                    <ul className="col-span-3">
                        {notes.map(({ title }) => (
                            <li className='notes-list' key={title}>
                                <span className="flex toLeft">
                                <div className="flex note-icon-box">
                                    <IconContext.Provider value={{ className: " cursor-pointer" }}>
                                        <BsChatLeftText
                                            className="note-icon"
                                        
                                        />
                                    </IconContext.Provider>
                                    </div>
                                    <div className="flex toCenter">
                                    <p className="text-notes cursor-pointer  inline"> {" " + title}</p>
                                    </div>
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    </aside>);
}

export default RightSide;