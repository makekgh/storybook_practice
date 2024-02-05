import React from 'react';
import PropTypes from 'prop-types';
import './selection.css';

export const Checkbox = ({ label }) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id="checkbox1" name="" className="" />
            <label htmlFor="checkbox1" className="checkbox__item">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;

Checkbox.propTypes = {
    label: PropTypes.string,
    //     labelText: PropTypes.string,
    //     successIcon: PropTypes.bool,
};

Checkbox.defaultProps = {
    label: 'Default',
};
