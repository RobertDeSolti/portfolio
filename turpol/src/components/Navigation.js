import React from 'react';
import PropTypes from 'prop-types';
import './navigation.scss';


export const Navigation = ({label, ...props }) => {
	return(
		<div className="navigation" {...props}>
			<div className="navigation__text">{label}</div>
				<div className="navigation__icon">
						<img src="img/svg/arrow.svg" alt="svg" className="svg" />
				</div>
		</div>
		      
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