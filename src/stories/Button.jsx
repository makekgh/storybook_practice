import React from 'react';
import PropTypes from 'prop-types';
import './button.css';

export const Button = ({ round, type, size, label, disabled, ...props }) => {
    const mode = round ? 'btn__round' : '';
    return (
        <button type="button" className={['btn', `btn__${size}`, `btn__${type}`, mode].join(' ')} {...props} disabled={disabled}>
            {label}
        </button>
    );
};

Button.propTypes = {
    round: PropTypes.bool,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    type: PropTypes.oneOf([
        'user-primary',
        'user-secondary',
        'user-secondary--stroke',
        'user-tertiary',
        'user-quaternary',
        'user-quaternary--stroke',
        'primary',
        'ghost',
        'solid',
        'tertiary',
        'outlined',
        'danger',
        'success',
    ]),
    label: PropTypes.string.isRequired,
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    round: false,
    size: 'medium',
    type: 'user-primary',
    disabled: false,
};
