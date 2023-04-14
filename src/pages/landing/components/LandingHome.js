import React from 'react';
import '../landing.css';
import '../../admin/style.css'
import NavigationLanding from './NavigationLanding'
import Slider from './Slider';
import WhySection from './WhySection';
import LatestCollection from './LatestCollection';


const LandingHome = () => {
  return (
    <div className='hero_area'>
      <NavigationLanding />
       <Slider />
       <WhySection />

      <LatestCollection />
      <h1>rrtgfg</h1>
    </div>
  )
}

export default LandingHome
