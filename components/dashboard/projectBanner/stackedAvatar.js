import { AvatarGroup, Avatar } from "@mui/material";
import { useSelector } from 'react-redux'


const StackedAvatar = (props) => {
    const members = useSelector((state) => state.allProjects.projects[props.porjectIndex])
    return (
        <>
            <AvatarGroup
                max={3}
                spacing="small"
            >
                {members.taskRow.map(({  member }, index) => (
                    <Avatar className="project-banner-header-avatars" key={index} alt={(member)? member: index} src={(member)? (member == "male")? "/images/avatar/male_avatar.png":"/images/avatar/female_avatar.png": " "} />
                ))}
            </AvatarGroup>

        </>
    );
}

export default StackedAvatar;