import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';

import logo from './assets/logo.svg';
import icon from './assets/profile-default.svg';

const menuList = [
    {
        id: 1,
        title: '내 발주 현황',
        newItem: true,
        url: '',
    },
    {
        id: 2,
        title: '진행중인 거래',
        newItem: true,
        url: '',
    },
    {
        id: 3,
        title: '자주가는 공장',
        newItem: false,
        url: '',
    },
];

export const MyProfile = ({ user, bedge }) => (
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
                                <button className="items__box items__profile is-active">
                                    <img className="user-img" src={icon} alt="프로필 이미지" />
                                </button>
                                <div className="header__modal modal mypage show">
                                    <div className="mypage__wrap">
                                        <button className="mypage__profile">
                                            <img className="user-img" src={icon} alt="프로필 이미지" />
                                            <div className="mypage__profile--wrap">
                                                <span className="mypage__profile--name">{user.name}</span>
                                                <span className={`member-bedge ${bedge}`}>{bedge === 'person' ? '개인' : bedge === 'enterprise' ? '기업' : '파트너'}</span>
                                                <p className="mypage__profile--text">내 프로필 관리</p>
                                            </div>
                                        </button>
                                        <ul className="mypage__link">
                                            {menuList.map((menu) => (
                                                <li>
                                                    <button className="mypage__link--item">
                                                        <span>{menu.title}</span>
                                                        {menu.newItem && <span className="new-icon">N</span>}
                                                    </button>
                                                </li>
                                            ))}
                                        </ul>
                                        {bedge === 'partner' && (
                                            <button className="page-change">
                                                <span className="icon"></span>
                                                <span className="page-change__text">파트너로 전환</span>
                                            </button>
                                        )}
                                    </div>
                                    <button className="logout">로그아웃</button>
                                </div>
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

                <div className="partner-link">
                    <span className="partner-link__text">견적을 수주받고 싶으세요?</span>
                    <Button size="small" round type="user-tertiary" label="파트너가입"></Button>
                </div>
            </div>
        </div>
    </header>
);

const active = () => {};

MyProfile.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }),
    bedge: PropTypes.oneOf(['person', 'enterprise', 'partner']),
};

MyProfile.defaultProps = {
    user: {
        name: '홍길동',
    },
    bedge: 'person',
};
