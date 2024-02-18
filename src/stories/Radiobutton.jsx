import React from 'react';
import './selection.css';

const radioList = [
    {
        title: 'radio item',
    },
    {
        title: 'radio item',
    },
    {
        title: 'radio item',
    },
];

export const RadioButton = ({ checked }) => {
    return (
        <div style={{ display: 'flex', gap: 20, paddingTop: 40 }}>
            {radioList.map((item, idx) => (
                <div className="radio">
                    <input type="radio" id={`radio${idx}`} name="sample2" className="" />
                    <label htmlFor={`radio${idx}`} className="radio__item radio__item--fill" checked={checked}>
                        {`${item.title} ${idx + 1}`}
                    </label>
                </div>
            ))}

            {/* <div className="radio">
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
            </div> */}
        </div>
    );
};
