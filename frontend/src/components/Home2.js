import React from 'react'
import Experience from './Experience'
import LiveAnywhere from './LiveAnywhere'
import Location from './Location'
import MillionHost from './MillionHost'
// import TabsSection from './TabsSection'
import Footer from './Footer';

function Home2() {
    return (
        <div>
            <div className="customContainer">
          <Location />
          <LiveAnywhere />
        </div>

        <Experience />
        <div className="customContainer">
          <MillionHost />
          {/* <TabsSection /> */}
        </div>
        <Footer />
        </div>
    )
}

export default Home2
