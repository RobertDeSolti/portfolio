import React, { useState } from 'react'
import Navigation from './components/Navigation'
import { benefitContent, conText } from './js/massive'

const SectionBenefits = () => {
	const [benefitsCard] = useState(benefitContent)
  return (
		<div className="section-benefits">
			<div className='section-wrapper'>
				<h2 className='section-benefits__tittle'>Benefits of Odigo</h2>
				<div className='section-benefits__cards'>
				{benefitsCard.map((benefit) => {
				const { id, img, tittle } = benefit
					return (
						<div className='card' key={id}> 
							<div className='icon'>
								<img src={img} alt='svg' className='icon__svg'/>
							</div>
						<h4 className='tittle'>{tittle}</h4>
						<p className='content'>{conText}</p>
						<Navigation label='LEARN MORE'/>
						</div>
					)
				})}
				</div>
			</div>
		</div>
  )
}

export default SectionBenefits