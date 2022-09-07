import React from 'react';
import ProjectCard from '../components/dashboard/squareCards/projectCards';
import Layout from '../components/layout/layout';
import ProjectBanner from "../components/dashboard/projectBanner/projectBanner";
import WelcomeDashboard from "../components/dashboard/welcomeBanner";
import { useSelector } from 'react-redux'



const Dashboard = () => {

  <style>
    @import url(&apos;https://fonts.googleapis.com/css2?family=Ubuntu:wght@500&display=swap&apos;);
  </style>

  /**
     * NOTE: don't forget to put all components insde the scrollable div
     */

  const projectList = useSelector((state) => state.allProjects.projects)
  return (
    <>
      <Layout>
        <div className="scroll">
          <h1>My Dashboard</h1>
          <div className="grid-clos-4 add-padding">
            <div className="col-span-4">
              <WelcomeDashboard />
            </div>
            <div className="col-span-4">
              <ProjectCard />
            </div>
            {projectList.map((project, index) => (
              <div className="project-dashboard-div" key={index} >
                <ProjectBanner
                  project={project}
                  projectIndex={index}
                />
              </div>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Dashboard;