import React, { useState } from 'react'
import './up.scss'

const ScrollButton = () =>{
  const [visible, setVisible] = useState(false)
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){setVisible(true)} 
    else if (scrolled <= 300){setVisible(false)}
  }
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
    })
  };
  window.addEventListener('scroll', toggleVisible);
	return (
		<>
			<div className="upbtnn">
				<button type='button' className='upbt' onClick={scrollToTop} style={{display: visible ? 'inline' : 'none'}}>
				<span>^</span>
				</button>
			</div>
		</>
	)
}
export default ScrollButton
