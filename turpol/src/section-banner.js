import React from 'react'
import ReactDOM from 'react-dom'
import Input from './components/Input'
import { Button } from './components/Button'

// CSS
import './scss/section-banner.scss'
import { Submit } from './components/Button.stories'
// setup vars

function SectionBanner() {
  return (
	<div className="section-banner">
		<div className='section-wrapper'>
			<div className='section-banner-content'>
				<h1 className='section-banner-content__tittle'>
				Discover Amazing places in Poland
				</h1>
				<div className='section-banner-content__subtittle'>
				Jump off balcony, onto stranger's head. Chase ball of string hide when
				guests come over. Being gorgeous with belly side up i could pee on
				this if i had the energy but under the bed, for attack the child, open
				the door,{' '}
				</div>
				<form className='section-banner-content__form'>
				<Input
					errors={['Invalid Input']}
					onClick={() => {}}
					placeholder='What would you like to do?'
					primary
					type='search'
				/>
				<Input
					errors={['Invalid Input']}
					onClick={() => {}}
					placeholder='Where would you like to go?'
					primary
					type='search'
				/>
				<Submit primary label='SEARCH' size='large' type='submit' />
				</form>
			</div>
		</div>
	</div>
  )
}

ReactDOM.render(<SectionBanner />, document.getElementById('banner'))
