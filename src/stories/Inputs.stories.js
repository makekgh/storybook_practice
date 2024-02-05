import { Input } from './Inputs';

export default {
    title: 'component/Inputs/default',
    component: Input,
    tags: ['autodocs'],
    parameters: {
        layout: 'centered',
    },
};

export const AllInputs = {
    render: () => (
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <Input></Input>
            <Input labelText="readonly" defaultValue="sample text" readonly></Input>
            <Input labelText="disabled" defaultValue="sample text" disabled></Input>
            <Input labelText="error" inputStatus="error" defaultValue="sample text"></Input>
            <Input labelText="success" inputStatus="success" defaultValue="sample text"></Input>
            <Input labelText="success icon" successIcon defaultValue="sample text" readonly></Input>
        </div>
    ),
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
        defaultValue: 'readonly',
    },
};

export const Disabled = {
    args: {
        labelText: 'disabled input',
        disabled: true,
        defaultValue: 'disabled',
    },
};

export const Error = {
    args: {
        labelText: 'error input',
        inputStatus: 'error',
        defaultValue: 'error',
    },
};

export const Success = {
    args: {
        labelText: 'success input',
        inputStatus: 'success',
        defaultValue: 'seccess',
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
