import React from 'react'
import ReactDOM from 'react-dom'

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
        {/* <div className="navigation">
					<div className="navigation__text">VIEW PREFECTURE</div>
					<div className="navigation__icon">
						<img src="img/svg/arrow.svg" alt="svg" className="svg" />
					</div>
				</div> */}
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
      </div>
	  <div className='picture'>
        <img src='img/b4_dunajec.jpg' alt='pic' className='picture__img' />
      </div>

    </div>
  )
}

ReactDOM.render(<SectionPerfection />, document.getElementById('perfection'))

{
  /* <div class="link">
		<div class="link__text">VIEW THE DUNAJEC</div>
		<div class="link__icon">
			<picture><source srcset="img/svg/arrow.svg" type="image/webp"><img src="img/svg/arrow.svg" alt="svg" class="svg"></picture>
		</div>
</div> */
}
{
  /* <div class="navigation">
		<div class="navigation__text">VIEW PREFECTURE</div>
		<div class="navigation__icon">
			<img src="img/svg/arrow.svg" alt="svg" class="svg" />
		</div>
</div> */
}
