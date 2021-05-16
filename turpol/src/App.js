import React from 'react'
import SectionHeader from './section-header'
import SectionBanner from './section-banner'
import SectionBenefits from './section-benefits'
// import SectionInspiration from './section-inspiration'
// import SectionPerfection from './section-perfection'
// import SectionToplist from './section-toplist'
// import SectionVideo from './section-video'
import SectionFooter from './section-footer'
import ScrollButton from './components/Up'
function App() {
  return (
    <>
      <ScrollButton className='upbtn' />
      <SectionHeader className='section-outer' />
      <SectionBanner className='section-outer' />
      <SectionBenefits className='section-outer' />
      {/* <SectionInspiration className="section-outer"/> */}
      {/* <SectionPerfection className="section-outer"/> */}
      {/* <SectionToplist className="section-outer"/> */}
      {/* <SectionVideo className="section-outer"/> */}
      <SectionFooter className='section-outer' />
    </>
  )
}

export default App
