import React from 'react'

const SectionVideo = () => {
  return (
	<div className="section-video" id='video'>
		<div className='section-inner'>
			<div className='section-video__embed'>
				<iframe
				className='presentation'
				title='video-section'
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

export default SectionVideo