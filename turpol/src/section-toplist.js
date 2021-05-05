/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import ReactDOM from 'react-dom'


// CSS

const cardsContentData = [
  { id: 1, tittle: 'ZAKOPANE', img: 'img/b5_zakopane.jpg' },
  { id: 2, tittle: 'POZNAN', img: 'img/b5_poznan.jpg' },
  { id: 3, tittle: 'CRACOW', img: 'img/b5_cracow.jpg' },
  { id: 4, tittle: 'WARSAW', img: 'img/b5_warsaw.jpg' },
  { id: 5, tittle: 'JAWORKI', img: 'img/b5_jaworki.jpg' },
  { id: 6, tittle: 'GDANSK', img: 'img/b5_gdansk.jpg' },
]



const comm_icon = 'img/svg/comm.svg'
const like_icon = 'img/svg/like.svg'

const content =
  'Jump off balcony, onto strangers head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.'

function SectionToplist() {
  return (
    <div className='section-toplist'>
      <div className='section-inner'>
        <div className='section-toplist__head'>
          <h2 className='tittle'>Today top places to visit</h2>
        </div>
        <div className='section-toplist__posts'>
          <Postcard />
        </div>
      </div>
    </div>
  )
}

const Postcard = () => {
  const [cardsData] = useState(cardsContentData)
  return (
    <>
      {cardsData.map((cards) => {
        const { id, img, tittle } = cards
        return (
          <div key={id} className='postcard'>
            <div className='postcard__tittle'>
              <img src={img} alt={tittle} className='thumbnail' />
              <div className='overlay'>
                <h3 className='overlay__tittle'>{tittle}</h3>
                <Poststats />
              </div>
            </div>
            <p className='postcard__content'>{content}</p>
            <div className='postcard__button'>
              <button label='SEE MORE' size='medium' type='button'></button>
            </div>
          </div>
        )
      })}
    </>
  )
}

const Poststats = () => {
  return (
		<div className='overlay__stats'>
			<div className="likes likes__ev">
				<a role='button' className='likes__count likes__ev likes__unactive'>
					<img src={like_icon} alt='like' className='likes__icon'/>
				</a>
				<p className='likes__number'>221</p>
			</div>
      <div className='comments'>
        <p className='comments__number'>50</p>
				<a role="button" className="comments__btn">
					<img src={comm_icon} alt='comm' className='comments__icon' />
				</a>
      </div>
    </div>
  )
}

export default SectionToplist