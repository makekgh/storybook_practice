import { Button } from './Button';

export default {
    title: 'component/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        // backgroundColor: { control: 'color' },
    },
};

export const UserPrimary = {
    args: {
        // primary: true,
        label: 'Button',
        type: 'user-primary',
    },
};

export const Secondary = {
    args: {
        label: 'Button',
        type: 'user-secondary',
    },
};

export const SecondaryStroke = {
    args: {
        label: 'Button',
        type: 'user-secondary--stroke',
    },
};

export const Quaternary = {
    args: {
        label: 'Button',
        type: 'user-quaternary',
    },
};

export const QuaternaryStroke = {
    args: {
        label: 'Button',
        type: 'user-quaternary--stroke',
    },
};

export const Danger = {
    args: {
        label: 'Button',
        type: 'danger',
    },
};

export const Success = {
    args: {
        label: 'Button',
        type: 'success',
    },
};

export const Small = {
    args: {
        size: 'small',
        label: 'Button',
        type: 'user-primary',
    },
};

export const Large = {
    args: {
        size: 'large',
        label: 'Button',
        type: 'user-primary',
    },
};

export const RoundShaped = {
    args: {
        size: 'small',
        label: 'Button',
        type: 'user-primary',
        round: true,
    },
};
