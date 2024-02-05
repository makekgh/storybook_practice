import { Checkbox } from './Checkbox';
import { RadioButton } from './Radiobutton';

export default {
    title: 'component/Selection',
    component: Checkbox,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export const Selection = {
    render: () => (
        <>
            <Checkbox></Checkbox>
            <RadioButton></RadioButton>
        </>
    ),
};

export const CheckBox = {
    args: {},
};

export const Radio = {
    render: () => (
        <>
            <RadioButton></RadioButton>
        </>
    ),
};
