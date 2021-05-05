import React, { useState } from 'react'
import { inspirationLarge, inspirationSmall } from './js/massive'

const SectionInspiration = () => {
	const [inspLarge] = useState(inspirationLarge)
	const [inspSmall] =useState(inspirationSmall)
  return (
    <div className='section-inspiration'>
      <div className='section-inner'>
        <div className='section-inspiration__head'>
          <div className='tittle'>Get inspired for your next trip</div>
        </div>
        <div className='section-inspiration__content'>
					{inspLarge.map((large)=>{
						const {id,img,tittle} = large
						return(
							<figure className='places-card places-card-size__lrg' key={id}>
								<img src={img} alt='pic' className='places-card__image' />
								<figcaption className='places-card__tittle'>{tittle}</figcaption>
    					</figure>
						)
					})}
					{inspSmall.map((small)=>{
						const {id,img,tittle} = small  
						return (
							<figure className='places-card places-card-size__sm' key={id}>
								<img src={img} alt='pic' className='places-card__image' />
								<figcaption className='places-card__tittle'>{tittle}</figcaption>
							</figure>
						)
					})}
        </div>
      </div>
    </div>
  )
}

export default SectionInspiration
