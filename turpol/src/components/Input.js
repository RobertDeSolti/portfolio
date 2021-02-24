import React from 'react';
import PropTypes from 'prop-types';
import './input.scss';

const Input = ({ primary, type, errors, ...rest}) => {
	const mode = primary ? 'input-field__primary' : 'input-field__witherror';
	return(
		<input
			placeholder={rest.placeholder}
			className={['input-field', `input-field__${type}`, mode].join(' ')}
			type={type}
			name={rest.name}
			isWithButton={rest.isWithButton}
			errors={errors.map((error) => <span className='error-hidden'>{error}, </span>)}
		/>
	)
};


export default Input;

Input.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.oneOf([
	  	'text',
		'password',
		'email',
		'checkbox',
		'date',
		'datetime-local',
		'file',
		'month',
		'number',
		'radio',
		'range',
		'reset',
		'search',
		'submit',
		'tel',
		'time',
		'week'
		]).isRequired,
	isWithButton: PropTypes.bool,
	onClick: PropTypes.func,
	errors: PropTypes.arrayOf(PropTypes.string)
};

Input.defaultProps = {
	placeholder: '',
	isWithButton: false,
	errors: []
};