import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { Modal } from './Modal';
import './navigation.scss';


export const Navigation = ({label}) => {
	const [showModal, setShowModal]	= useState(false) 
	const showModalWindow = () => {
		if (showModal === false){
			setShowModal(true)
			
		}
	}
	return(
		<>
		<div className="navigation">
			<div className="navigation__text">{label}</div>
			<div className="navigation__icon" onClick={showModalWindow}>
				<img src="img/svg/arrow.svg" alt="svg" className="svg" />
			</div>
		</div>
		</>
	)
}

export default Navigation;

Navigation.propTypes = {
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,	
}

Navigation.defaultProps = {
	onClick: undefined,
};