/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react'
import { cardsContentData, conText } from './js/massive'

const SectionToplist = () => {
  return (
    <div className='section-toplist' id='toplist'>
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
            <p className='postcard__content'>{conText}</p>
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
					<img src='img/svg/like.svg' alt='like' className='likes__icon'/>
				</a>
				<p className='likes__number'>221</p>
			</div>
      <div className='comments'>
        <p className='comments__number'>50</p>
				<a role="button" className="comments__btn">
					<img src='img/svg/comm.svg' alt='comm' className='comments__icon'/>
				</a>
      </div>
    </div>
  )
}

export default SectionToplist