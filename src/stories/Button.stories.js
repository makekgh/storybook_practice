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

export const userSecondary = {
    args: {
        label: 'Button',
        type: 'user-secondary',
    },
};

export const userSecondaryStroke = {
    args: {
        label: 'Button',
        type: 'user-secondary--stroke',
    },
};

export const userTertiary = {
    args: {
        label: 'Button',
        type: 'user-tertiary',
    },
};

export const userQuaternary = {
    args: {
        label: 'Button',
        type: 'user-quaternary',
    },
};

export const userQuaternaryStroke = {
    args: {
        label: 'Button',
        type: 'user-quaternary--stroke',
    },
};

export const Primary = {
    args: {
        label: 'Button',
        type: 'primary',
    },
};
export const Ghost = {
    args: {
        label: 'Button',
        type: 'ghost',
    },
};
export const solid = {
    args: {
        label: 'Button',
        type: 'solid',
    },
};
export const tertiary = {
    args: {
        label: 'Button',
        type: 'tertiary',
    },
};
export const outlined = {
    args: {
        label: 'Button',
        type: 'outlined',
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
