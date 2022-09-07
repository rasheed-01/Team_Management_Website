import SmallCard from "./Smallcard";


const ProjectCard = ({ children }) => {
    return (
      <>
        <div className="grid grid-cols-4 gap-4  cards-div">
          <div className="col-span-2 lg:col-span-1"><SmallCard title={`Total Members`} num={30} img2={"/images/castle.png"}/></div>
          <div className="col-span-2 lg:col-span-1"><SmallCard title={"Projects"} num={12} img2={"/images/Spellbook256px.png"}/></div>
          <div className="col-span-2 lg:col-span-1"><SmallCard title={"Tasks"} num={25} img2={"/images/Swords256px.png"}/></div>
          <div className="col-span-2 lg:col-span-1"><SmallCard title={"Finished Projects"} num={25} img2={"/images/Treasure256px.png"}/></div>
        </div>
      </>
    );
}

    export default ProjectCard;

