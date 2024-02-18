import AlertMsg from '../AlertMsg/AlertMsg';
import './Footer.scss';

const footerText = [
    {
        text: '공장을 운영하는 회원이더라도 파트너 회원이 아닌 경우, 이벤트 참여대상자가 아닙니다. 먼저 파트너로 전환해주세요.',
    },
    {
        text: '파트너 회원의 포트폴리오 및 정보가 부적합한 경우, 추가 정보를 요청드릴 수 있으며 추가 정보 제출 전까지 후순위로 배치될 수 있습니다.',
    },
    {
        text: '본 이벤트 신청 후 정확한 SNS 업로드 일시를 전달드리지 않으며 신청 순으로 업로드 되며 업로드 후 각 회원 별로 연락드릴 예정입니다. (연락은 회원 기본정보에 포함된 전화번호로 발송)',
    },
    {
        text: '본 이벤트는 신청자에 한해 선착순으로 진행되는 이벤트로 조기 종료될 수 있습니다.',
    },
    {
        text: '본 이벤트 내용은 당신의 제작소 사정에 따라 언제든 변경될 수 있습니다.',
    },
];

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <p className="footer__title">유의사항</p>
                <p className="footer__sub">
                    <AlertMsg text={'이벤트 신청 전 꼭 확인하세요.'}></AlertMsg>
                </p>
                <ul className="list">
                    {footerText.map((item, idx) => (
                        <li className="list__item" key={idx}>
                            <span className="list__num">{idx + 1}.</span>
                            <p className="list__txt">{item.text}</p>
                        </li>
                    ))}
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
