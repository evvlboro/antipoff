import PropTypes from 'prop-types';
import './style.scss';

export default function Button({
	label,
	type,
	color,
	size,
	disabled,
	onClick,
	className,
}) {
	const props = {
		disabled,
		onClick,
	};

	return (
		<button
			{...props}
			type={type}
			className={`button button_${size} button_color-${color} ${className}`}
		>
			{label}
		</button>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	url: PropTypes.string,
	type: PropTypes.oneOf(['button', 'submit']),
	disabled: PropTypes.bool,
	color: PropTypes.oneOf(['primary', 'secondary']),
	size: PropTypes.oneOf(['medium', 'large']),
	onClick: PropTypes.func,
	className: PropTypes.string,
};

Button.defaultProps = {
	type: 'button',
	url: undefined,
	disabled: false,
	color: undefined,
	size: 'medium',
	onClick: undefined,
	className: '',
};
