import React from 'react';
import HeroBanner from '../components/HeroBanner';
import UseWindowSize from '/components/facilities/windowSize';
import Image from 'next/image';
import Layout from '../components/layout/layout';

const Home = () => {

const width = UseWindowSize().width;
//for disabling the the scrolable part in mobile
const sm = 768;
const md = 1024;
/**
* NOTE: don't forget to put all components insde the scrollable div
*/

  return (
    <Layout>
      <div>
            <div className="scroll">
              <h1 className='title2'> My Dashboard </h1>
              <HeroBanner />
              <ProjectCard1 />
            </div>
      </div>
      </Layout>
  );
}

export default Home;
