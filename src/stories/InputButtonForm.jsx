import React from 'react';
import PropTypes from 'prop-types';

import './inputs.css';
import { useState } from 'react';

export const InputButtonForm = ({ inputStatus, labelRequired, labelDisabled, labelText, successIcon, placeholder, value, readonly, disabled, helpText, btnDisabled }) => {
    const requiredLabel = labelRequired ? 'required' : '';
    const disabledLabel = labelDisabled ? 'disabled' : '';
    const iconSuccess = successIcon ? 'success-icon' : '';

    const [activeBorder, setActiveBorder] = useState({
        inputBorder: false,
    });

    const { inputBorder } = activeBorder;

    const handleFocusBorder = (border) => {
        setActiveBorder({
            ...activeBorder,
            [border]: true,
        });
    };

    const handleBlurBorder = (border) => {
        setActiveBorder({
            ...activeBorder,
            [border]: '',
        });
    };

    //     const btnStyle = {
    //         padding: '4px 16',
    //         color: '#6a27d8',
    //         marginRight: 8,
    //         '&:hover': {
    //             backgroundColor: 'red',
    //         },
    //     };

    return (
        <div className={`textfield ${inputStatus}`} style={{ width: 240 }}>
            <label htmlFor="" className={`label ${requiredLabel} ${disabledLabel}`}>
                {labelText}
            </label>
            <div className={`btn-form ${inputStatus} ${iconSuccess} ${inputStatus !== 'error' && inputBorder && 'active'}`}>
                <input
                    type="text"
                    className={iconSuccess}
                    placeholder={placeholder}
                    defaultValue={value}
                    readOnly={readonly}
                    disabled={disabled}
                    onFocus={() => handleFocusBorder('inputBorder')}
                    onBlur={() => handleBlurBorder('inputBorder')}
                />
                <button type="button" className="btn btn__small btn-form__btn" disabled={btnDisabled}>
                    확인
                </button>
            </div>
            <span className={`help-text ${inputStatus}`}>{helpText}</span>
        </div>
    );
};

InputButtonForm.propTypes = {
    inputStatus: PropTypes.oneOf(['default', 'error', 'success']),
    labelRequired: PropTypes.bool,
    labelDisabled: PropTypes.bool,
    labelText: PropTypes.string,
    successIcon: PropTypes.bool,
    placeholder: PropTypes.string,
    defaultValue: PropTypes.string,
    readonly: PropTypes.bool,
    disabled: PropTypes.bool,
    helpText: PropTypes.string,
    btnDisabled: PropTypes.bool,
};

InputButtonForm.defaultProps = {
    labelText: 'Default',
    labelRequired: true,
    inputStatus: 'default',
    placeholder: 'placeholder',
    helpText: 'help text',
};
