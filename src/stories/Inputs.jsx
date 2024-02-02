import React from 'react';
// import PropTypes from 'prop-types';

import './inputs.css';

export const Input = ({ labelRequired, labelDisabled, labelText, placeholder, value, readonly, disabled, helpText, helpTextType }) => (
    <div className="textfield" style={{ width: 240, padding: 40 }}>
        <label htmlFor="" className={`label ${labelRequired} ${labelDisabled} `}>
            {labelText}
        </label>
        <input type="text" placeholder={placeholder} value={value} readOnly={readonly} disabled={disabled} />
        <span class={`help-text ${helpTextType}`}>{helpText}</span>
    </div>
);

Input.defaultProps = {
    labelText: 'Default',
    placeholder: 'placeholder',
    helpText: 'help text',
};
