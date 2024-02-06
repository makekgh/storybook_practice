import { Button } from './Button';

export default {
    title: 'component/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    args: {
        label: 'Button',
    },
};

export const AllTypeButtons = {
    render: () => (
        <div style={{ maxWidth: 600, display: 'flex', flexWrap: 'wrap', gap: 24 }}>
            <Button type="user-primary"></Button>
            <Button type="user-secondary"></Button>
            <Button type="user-secondary--stroke"></Button>
            <Button type="user-tertiary"></Button>
            <Button type="user-quaternary"></Button>
            <Button type="user-quaternary--stroke"></Button>
            <Button type="primary"></Button>
            <Button type="ghost"></Button>
            <Button type="solid"></Button>
            <Button type="tertiary"></Button>
            <Button type="outlined"></Button>
            <Button type="danger"></Button>
            <Button type="success"></Button>
        </div>
    ),
};

export const UserPrimary = {
    args: {
        type: 'user-primary',
    },
};

export const UserSecondary = {
    args: {
        type: 'user-secondary',
    },
};

export const UserSecondaryStroke = {
    args: {
        type: 'user-secondary--stroke',
    },
};

export const UserTertiary = {
    args: {
        type: 'user-tertiary',
    },
};

export const UserQuaternary = {
    args: {
        type: 'user-quaternary',
    },
};

export const UserQuaternaryStroke = {
    args: {
        type: 'user-quaternary--stroke',
    },
};

export const Primary = {
    args: {
        type: 'primary',
    },
};
export const Ghost = {
    args: {
        type: 'ghost',
    },
};
export const Solid = {
    args: {
        type: 'solid',
    },
};
export const Tertiary = {
    args: {
        type: 'tertiary',
    },
};
export const Otlined = {
    args: {
        type: 'outlined',
    },
};

export const Danger = {
    args: {
        type: 'danger',
    },
};

export const Success = {
    args: {
        type: 'success',
    },
};

export const Small = {
    args: {
        size: 'small',
        type: 'user-primary',
    },
};

export const Large = {
    args: {
        size: 'large',
        type: 'user-primary',
    },
};

export const RoundShaped = {
    args: {
        size: 'small',
        type: 'user-primary',
        round: true,
    },
};
