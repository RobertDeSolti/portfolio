import React from 'react'
import Input from './components/Input'
import { Submit } from './components/Button.stories'

const SectionBanner = () => {
  return (
	<div className="section-banner" id='top'>
		<div className='section-wrapper'>
			<div className='section-banner-content'>
				<h1 className='section-banner-content__tittle'>
				Discover Amazing places in Poland
				</h1>
				<div className='section-banner-content__subtittle'>
				Jump off balcony, onto stranger's head. Chase ball of string hide when
				guests come over. Being gorgeous with belly side up i could pee on
				this if i had the energy but under the bed, for attack the child, open
				the door.
				</div>
				<form className='section-banner-content__form'>
				<Input errors={['Invalid Input']} onClick={() => {}} placeholder='What would you like to do?' primary type='search'/>
				<Input errors={['Invalid Input']} onClick={() => {}} placeholder='Where would you like to go?' primary type='search'/>
				<Submit primary label='SEARCH' size='large' type='submit' />
				</form>
			</div>
		</div>
	</div>
  )
}

export default SectionBanner
