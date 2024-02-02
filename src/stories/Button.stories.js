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

export const AllTypeButtons = {
    render: () => (
        <div style={{ maxWidth: 600, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <Button type="user-primary" label="Button"></Button>
            <Button type="user-secondary" label="Button"></Button>
            <Button type="user-secondary--stroke" label="Button"></Button>
            <Button type="user-tertiary" label="Button"></Button>
            <Button type="user-quaternary" label="Button"></Button>
            <Button type="user-quaternary--stroke" label="Button"></Button>
            <Button type="primary" label="Button"></Button>
            <Button type="ghost" label="Button"></Button>
            <Button type="solid" label="Button"></Button>
            <Button type="tertiary" label="Button"></Button>
            <Button type="outlined" label="Button"></Button>
            <Button type="danger" label="Button"></Button>
            <Button type="success" label="Button"></Button>
        </div>
    ),
};

export const UserPrimary = {
    args: {
        // primary: true,
        label: 'Button',
        type: 'user-primary',
    },
};

export const UserSecondary = {
    args: {
        label: 'Button',
        type: 'user-secondary',
    },
};

export const UserSecondaryStroke = {
    args: {
        label: 'Button',
        type: 'user-secondary--stroke',
    },
};

export const UserTertiary = {
    args: {
        label: 'Button',
        type: 'user-tertiary',
    },
};

export const UserQuaternary = {
    args: {
        label: 'Button',
        type: 'user-quaternary',
    },
};

export const UserQuaternaryStroke = {
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
export const Solid = {
    args: {
        label: 'Button',
        type: 'solid',
    },
};
export const Tertiary = {
    args: {
        label: 'Button',
        type: 'tertiary',
    },
};
export const Otlined = {
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
