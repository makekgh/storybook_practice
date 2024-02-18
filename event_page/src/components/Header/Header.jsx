import logo from './../../assets/images/logo-white.svg';
import './Header.scss';

export const Header = () => {
    return (
        <section className="contents__head">
            <div className="container">
                <div className="logo">
                    <img className="" src={logo} alt="당신의 제작소" />
                </div>
                <h1 className="txt txt__title">SNS 홍보 이벤트</h1>
                <h2 className="txt txt__sub">3,400명이 넘는 예비고객들을 만나보세요!</h2>
            </div>
        </section>
    );
};
