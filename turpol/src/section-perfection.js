import React from 'react'
import Navigation from './components/Navigation'

// CSS
import './scss/section-perfection.scss'
// setup vars

function SectionPerfection() {
  return (
	<div className="section-perfection">
		<div className='section-inner'>
			<PerfectionBlockOne />
			<PerfectionBlockTwo />
		</div>
	</div>
  )
}

function PerfectionBlockOne() {
  return (
    <div className='section-perfection__block1'>
      <div className='picture'>
        <img src='img/b4_karwia.jpg' alt='pic' className='picture__img' />
      </div>
      <div className='content'>
        <div className='tittle'>Prefecture in Focus: Karwia</div>
        <div className='subtittle'>
          Jump off balcony, onto stranger's head. Chase ball of string hide when
          guests come over. Being gorgeous with belly side up i could pee on
          this if i had the energy but under the bed, for attack the child, open
          the door,{' '}
        </div>
		<Navigation label='VIEW PREFECTURE'/>
      </div>
    </div>
  )
}

function PerfectionBlockTwo() {
  return (
    <div className='section-perfection__block2'>
        <div className='content'>
        	<h3 className='tittle'>The "Dunajec": Castle in Niedzica</h3>
        	<div className='subtittle'>
				Jump off balcony, onto stranger's head. Chase ball of string hide when
				guests come over. Being gorgeous with belly side up i could pee on
				this if i had the energy but under the bed, for attack the child, open
				the door,{' '}
        	</div>
			<Navigation label='VIEW THE DUNAJEC'/>
      </div>
	  <div className='picture'>
        <img src='img/b4_dunajec.jpg' alt='pic' className='picture__img' />
      </div>
    </div>
  )
}

export default SectionPerfection