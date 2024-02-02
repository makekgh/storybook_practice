import { Header } from './Header';

export default {
    title: 'component/Header/GNB',
    component: Header,
    tags: ['autodocs'],
    parameters: {
        layout: 'fullscreen',
    },
};

export const LoggedIn = {
    args: {
        user: {
            name: 'Jane Doe',
        },
        partner: false,
    },
};

export const LoggedOut = {
    // args: {
    //     partner: false,
    // },
};
export const PartnerLoggedIn = {
    args: {
        user: {
            name: 'Jane Doe',
        },
        partner: true,
    },
};
