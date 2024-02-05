import React from 'react';
import './selection.css';

export const RadioButton = () => {
    return (
        <div style={{ display: 'flex', gap: 20, paddingTop: 40 }}>
            <div className="radio">
                <input type="radio" id="radio1" name="sample2" className="" />
                <label htmlFor="radio1" className="radio__item radio__item--fill">
                    radio item1
                </label>
            </div>

            <div className="radio">
                <input type="radio" id="radio2" name="sample2" className="" />
                <label htmlFor="radio2" className="radio__item radio__item--fill">
                    radio item2
                </label>
            </div>

            <div className="radio">
                <input type="radio" id="radio4" name="sample2" className="" />
                <label htmlFor="radio4" className="radio__item radio__item--fill">
                    radio item3
                </label>
            </div>
        </div>
    );
};
