import { InputButtonForm } from './InputButtonForm';

export default {
    title: 'component/Inputs/buttonForm',
    component: InputButtonForm,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export const AllInputs = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <InputButtonForm></InputButtonForm>
            <InputButtonForm labelText="button disabled" defaultValue="sample text" btnDisabled></InputButtonForm>
            <InputButtonForm labelText="error" defaultValue="sample text" inputStatus="error"></InputButtonForm>
            <InputButtonForm labelText="with success icon" defaultValue="read-only" successIcon readonly></InputButtonForm>
        </div>
    ),
};

export const Default = {
    args: {
        labelRequired: false,
    },
};

export const ButtonDisabled = {
    args: {
        labelText: 'disabled button',
        defaultValue: 'disabled',
        btnDisabled: true,
    },
};

export const Error = {
    args: {
        labelText: 'error input',
        inputStatus: 'error',
        defaultValue: 'error',
    },
};

export const SuccessIcon = {
    args: {
        labelText: 'with success icon',
        defaultValue: 'it would be read-only',
        successIcon: true,
        readonly: true,
    },
};
