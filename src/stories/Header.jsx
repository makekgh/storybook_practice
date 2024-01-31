import React from 'react';
import PropTypes from 'prop-types';

import { Button } from './Button';
import './header.css';

import logo from './assets/logo.svg';
import icon from './assets/profile-default.svg';

export const Header = ({ user, partner, onLogin, onLogout, onCreateAccount }) => (
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
                            {/* <!-- 유저프로필 영역 --> */}
                            <div className="header__modal--wrap" onclick="popupOpen(mypagePopup), btnActive(this)">
                                {/* <!-- [전달사항 231011] ↓↓↓  유저프로필 버튼 클릭 시 .items__box에 .is-active 클래스를 추가하여 버튼에 active 표시 --> */}
                                <button className="items__box items__profile">
                                    <img className="user-img" src={icon} alt="프로필 이미지" />
                                </button>

                                {/* <!-- 유저 정보 팝업 --> */}
                                {/* <!-- [전달사항 231011] ↓↓↓  유저프로필 버튼 클릭 시 .mypage에 .show 클래스를 추가하여 팝업 출력 --> */}
                                <div className="header__modal modal mypage">
                                    <div className="mypage__wrap">
                                        <a className="mypage__profile" href="javascript:void(0)">
                                            <img className="user-img" src={icon} alt="프로필 이미지" />
                                            <div className="mypage__profile--wrap">
                                                <span className="mypage__profile--name">김동환</span>

                                                {/* <!-- [전달사항 231011] 
                                            ↓↓↓ 유저 등급별로 .member-bedge에 .partner / .person / .enterprise 클래스를 추가하여 사용
                                                예)
                                                <span className="member-bedge partner">파트너</span>
                                                <span className="member-bedge person">개인</span>
                                                <span className="member-bedge enterprise">기업</span>
                                        --> */}
                                                <span className="member-bedge partner">파트너</span>
                                                <p className="mypage__profile--text">내 프로필 관리</p>
                                            </div>
                                        </a>
                                        <ul className="mypage__link">
                                            {/* <!-- 메뉴 모듈 --> */}
                                            <li>
                                                <a className="mypage__link--item" href="javascript:void(0)">
                                                    <span>내 발주 현황</span>
                                                    {/* <!-- [전달사항 230918] ↓↓↓ 새로운 발주가 들어오면 span.new-icon 추가 --> */}
                                                    <span className="new-icon">N</span>
                                                </a>
                                            </li>
                                            {/* <!-- // 메뉴 모듈 --> */}
                                            <li>
                                                <a className="mypage__link--item" href="javascript:void(0)">
                                                    <span>진행중인 거래</span>
                                                    <span className="new-icon">N</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="mypage__link--item" href="javascript:void(0)">
                                                    <span>자주가는 공장</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="mypage__link--item" href="javascript:void(0)">
                                                    <span>내 계좌관리</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="mypage__link--item" href="javascript:void(0)">
                                                    <span>정산관리</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="mypage__link--item" href="javascript:void(0)">
                                                    <span>결제내역</span>
                                                </a>
                                            </li>
                                            <li>
                                                <a className="mypage__link--item" href="javascript:void(0)">
                                                    <span>정산관리</span>
                                                </a>
                                            </li>
                                        </ul>
                                        <button className="page-change">
                                            <span className="icon"></span>
                                            <span className="page-change__text">파트너로 전환</span>
                                        </button>
                                    </div>
                                    <a className="logout" href="javascript:void(0)">
                                        로그아웃
                                    </a>
                                </div>
                                {/* <!-- // 유저 정보 팝업 --> */}
                            </div>
                            {/* <!-- // 유저프로필 영역 --> */}
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
    onLogin: PropTypes.func.isRequired,
    onLogout: PropTypes.func.isRequired,
    onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
    user: null,
    partner: false,
};
