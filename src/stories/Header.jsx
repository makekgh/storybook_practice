import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';

import logo from './assets/logo.svg';
import icon from './assets/profile-default.svg';

export const Header = ({ user, partner }) => (
    <header className="header">
        <div className="contents">
            <div className="header__wrap header__top">
                <h1 className="logo">
                    <button type="button">
                        <img className="logo__img" src={logo} alt="당신의 제작소 로고" />
                    </button>
                </h1>
                <div>
                    {user ? (
                        <div className="header__items user-box">
                            <div className="header__modal--wrap">
                                <button className="items__box items__profile">
                                    <img className="user-img" src={icon} alt="프로필 이미지" />
                                </button>
                            </div>
                        </div>
                    ) : (
                        <div className="header__items login">
                            <Button size="small" type="tertiary" label="로그인"></Button>
                            <Button size="small" type="tertiary" label="회원가입"></Button>
                        </div>
                    )}
                </div>
            </div>
            <div className="header__wrap header__bottom">
                <nav className="gnb">
                    <button className="gnb__item">공장검색</button>
                    <button className="gnb__item is-active">이용안내</button>
                </nav>

                {partner ? (
                    ''
                ) : (
                    <div className="partner-link">
                        <span className="partner-link__text">견적을 수주받고 싶으세요?</span>
                        <Button size="small" round type="user-tertiary" label="파트너가입"></Button>
                    </div>
                )}
            </div>
        </div>
    </header>
);

Header.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),

    partner: PropTypes.bool,
    // onLogin: PropTypes.func.isRequired,
    // onLogout: PropTypes.func.isRequired,
    // onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
    user: null,
    partner: false,
};
