import React from 'react'
import ReactDOM from 'react-dom'

// CSS
import './scss/section-benefits.scss'
// setup vars

const firstBenefit = {
  img: 'img/svg/warsaw_build.svg',
  tittle: 'Welcome to Odigo!',
}
const secondBenefit = {
  img: 'img/svg/person.svg',
  tittle: 'Your Personal Poland Guide',
}
const thirdBenefit = {
  img: 'img/svg/kiosk.svg',
  tittle: 'Promoting Local Businesses',
}
const navigation_text = 'LEARN MORE'
const navigation_icon = 'img/svg/arrow.svg'
const content =
  'Jump off balcony, onto strangers head. Chase ball of string hide when guests come over. Being gorgeous with belly side up i could pee on this.'

function SectionBenefits() {
  return (
	<div className="section-benefits">
		<div className='section-wrapper'>
			<h2 className='section-benefits__tittle'>Benefits of Odigo</h2>
			<div className='section-benefits__cards'>
				<Benefitcard img={firstBenefit.img} tittle={firstBenefit.tittle} />
				<Benefitcard img={secondBenefit.img} tittle={secondBenefit.tittle} />
				<Benefitcard img={thirdBenefit.img} tittle={thirdBenefit.tittle} />
			</div>
		</div>
	</div>
  )
}

const Benefitcard = (props) => {
  return (
    <div className='card'>
      <div className='icon'>
        <img src={props.img} alt='svg' className='icon__svg' />
      </div>
      <h4 className='tittle'>{props.tittle}</h4>
      <p className='content'>{content}</p>
      <div className='navigation'>
        <p className='navigation__text'>{navigation_text}</p>
        <div className='navigation__icon'>
          <img src={navigation_icon} alt='svg' className='svg' />
        </div>
      </div>
    </div>
  )
}

ReactDOM.render(<SectionBenefits />, document.getElementById('benefits'))
