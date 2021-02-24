import React from 'react'
import ReactDOM from 'react-dom'
import { Pressbtn } from './components/Button.stories'


// CSS
import './scss/section-toplist.scss'
// setup vars
const firstCard = {
  tittle: 'ZAKOPANE',
  img: 'img/b5_zakopane.jpg',
}
const secondCard = {
  tittle: 'POZNAN',
  img: 'img/b5_poznan.jpg',
}
const thirdCard = {
  tittle: 'CRACOW',
  img: 'img/b5_cracow.jpg',
}
const fourthCard = {
  tittle: 'WARSAW',
  img: 'img/b5_warsaw.jpg',
}
const fifthCard = {
  tittle: 'JAWORKI',
  img: 'img/b5_jaworki.jpg',
}
const sixthCard = {
  tittle: 'GDANSK',
  img: 'img/b5_gdansk.jpg',
}
const like_icon = 'img/svg/like.svg'
const comm_icon = 'img/svg/comm.svg'
const content =
  'Jump off balcony, onto strangers head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.'

function SectionToplist() {
  return (
	<div className="section-toplist">
		<div className='section-inner'>
			<div className='section-toplist__head'>
				<h2 className='tittle'>Today top places to visit</h2>
			</div>
			<div className='section-toplist__posts'>
				<Postcard img={firstCard.img} tittle={firstCard.tittle} />
				<Postcard img={secondCard.img} tittle={secondCard.tittle} />
				<Postcard img={thirdCard.img} tittle={thirdCard.tittle} />
				<Postcard img={fourthCard.img} tittle={fourthCard.tittle} />
				<Postcard img={fifthCard.img} tittle={fifthCard.tittle} />
				<Postcard img={sixthCard.img} tittle={sixthCard.tittle} />
			</div>
		</div>
	</div>
  )
}

const Postcard = (props) => {
  return (
    <div className='postcard'>
      <div className='postcard__tittle'>
        <img src={props.img} alt='b5_zakopane' className='thumbnail' />
        <div className='overlay'>
          <h3 className='overlay__tittle'>{props.tittle}</h3>
          <div className='overlay__stats'>
            <div className='likes'>
              <p className='likes__number'>221</p>
              <img src={like_icon} alt='like' className='likes__icon' />
            </div>
            <div className='comments'>
              <p className='comments__number'>50</p>
              <img src={comm_icon} alt='comm' className='comments__icon' />
            </div>
          </div>
        </div>
      </div>
      <p className='postcard__content'>{content}</p>
      <div className='postcard__button'>
		<Pressbtn  label='SEE MORE' size='medium' type='button' />
      </div>
    </div>
  )
}

ReactDOM.render(<SectionToplist />, document.getElementById('toplist'))
