import { Input } from './Inputs';

export default {
    title: 'component/Inputs',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export const Default = {
    args: {
        labelRequired: false,
    },
};

export const Readonly = {
    args: {
        labelText: 'readonly input',
        readonly: true,
        value: 'readonly',
    },
};

export const Disabled = {
    args: {
        labelText: 'disabled input',
        disabled: true,
        value: 'disabled',
    },
};

export const Error = {
    args: {
        labelText: 'error input',
        inputStatus: 'error',
        value: 'error',
    },
};

export const Success = {
    args: {
        labelText: 'success input',
        inputStatus: 'success',
        value: 'seccess',
    },
};

export const SuccessIcon = {
    args: {
        labelText: 'with success icon',
        value: 'it would be read-only',
        successIcon: true,
        readonly: true,
    },
};
