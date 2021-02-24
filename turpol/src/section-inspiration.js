import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './scss/section-inspiration.scss'
// setup vars

const firstLargecard = {
  img: 'img/b3_tatras.jpg',
  tittle: 'Tatras',
}
const secondLargecard = {
  img: 'img/b3_gdansk.jpg',
  tittle: 'Gdansk',
}

const firstSmallcard = {
  img: 'img/b3_zamosc.jpg',
  tittle: 'Zamosc',
}
const secondSmallcard = {
  img: 'img/b3_cracow.jpg',
  tittle: 'Cracow',
}
const thirdSmallcard = {
  img: 'img/b3_warsaw.jpg',
  tittle: 'Warsaw',
}

function SectionInspiration() {
  return (
	<div className="section-inspiration">
		<div className='section-inner'>
			<div className='section-inspiration__head'>
				<div className='tittle'>Get inspired for your next trip</div>
				{/* <div className="navigation">
								<div className="navigation__text">VIEW ALL</div>
								<div className="navigation__icon">
									<img src="img/svg/arrow.svg" alt="svg" className="svg" />
								</div>
							</div> */}
			</div>
			<div className='section-inspiration__content'>
				<Largecard img={firstLargecard.img} tittle={firstLargecard.tittle} />
				<Largecard img={secondLargecard.img} tittle={secondLargecard.tittle} />
				<Smallcard img={firstSmallcard.img} tittle={firstSmallcard.tittle} />
				<Smallcard img={secondSmallcard.img} tittle={secondSmallcard.tittle} />
				<Smallcard img={thirdSmallcard.img} tittle={thirdSmallcard.tittle} />
			</div>
		</div>
	</div>
  )
}

const Largecard = (props) => {
  return (
    <figure className='places-card places-card-size__lrg'>
      <img src={props.img} alt='pic' className='places-card__image' />
      <figcaption className='places-card__tittle'>{props.tittle}</figcaption>
    </figure>
  )
}

const Smallcard = (props) => {
  return (
    <figure className='places-card places-card-size__sm'>
      <img src={props.img} alt='pic' className='places-card__image' />
      <figcaption className='places-card__tittle'>{props.tittle}</figcaption>
    </figure>
  )
}

ReactDOM.render(<SectionInspiration />, document.getElementById('inspiration'))
