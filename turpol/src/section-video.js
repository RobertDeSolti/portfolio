import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './scss/section-video.scss'
// setup vars

function SectionVideo() {
  return (
	<div className="section-video">
		<div className='section-inner'>
			<div className='section-video__embed'>
				<iframe
				className='presentation'
				src='https://www.youtube.com/embed/65j700G51ZY'
				frameborder='0'
				allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
				allowfullscreen
				></iframe>
			</div>
		</div>
	</div>
  )
}

ReactDOM.render(<SectionVideo />, document.getElementById('video'))
