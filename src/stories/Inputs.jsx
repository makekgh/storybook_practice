import React from 'react';
import PropTypes from 'prop-types';

import './inputs.css';

export const Input = ({ inputStatus, labelRequired, labelDisabled, labelText, successIcon, placeholder, value, readonly, disabled, helpText }) => {
    const requiredLabel = labelRequired ? 'required' : '';
    const disabledLabel = labelDisabled ? 'disabled' : '';
    const iconSuccess = successIcon ? 'success-icon' : '';

    return (
        <div className={`textfield ${inputStatus}`} style={{ width: 240, padding: 40 }}>
            <label htmlFor="" className={`label ${requiredLabel} ${disabledLabel}`}>
                {labelText}
            </label>
            <input type="text" className={`${inputStatus} ${iconSuccess}`} placeholder={placeholder} value={value} readOnly={readonly} disabled={disabled} />
            <span className={`help-text ${inputStatus}`}>{helpText}</span>
        </div>
    );
};

Input.propTypes = {
    inputStatus: PropTypes.oneOf(['default', 'error', 'success']),
    labelRequired: PropTypes.bool,
    labelDisabled: PropTypes.bool,
    labelText: PropTypes.string,
    successIcon: PropTypes.bool,
    placeholder: PropTypes.string,
    value: PropTypes.string,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
    helpText: PropTypes.string,
};

Input.defaultProps = {
    labelText: 'Default',
    labelRequired: true,
    placeholder: 'placeholder',
    helpText: 'help text',
};
