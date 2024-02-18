import AlertMsg from '../AlertMsg/AlertMsg';

const infoList = [
    {
        detail: false,
        title: '혜택내용',
        desc: '우리 공장의 실제 포트폴리오 사진 및 정보를 SNS(당신의제작소 공식 인스타그램)에 업로드',
    },
    {
        detail: false,
        title: '참여대상',
        desc: '당신의제작소 <span class="accent">파트너 회원</span> 누구나',
    },
    {
        detail: true,
    },
    {
        detail: false,
        title: '기간',
        desc: '2024.02.21 ~ 2024.03.20',
    },
];

//파트너 혜택 리스트
const detailList = ['공장 프로필 관리', '실시간 채팅문의', '인바운드 견적요청서', '공장 홍보', '원스톱 공장거래'];

function EventInfo() {
    return (
        <ul className="info">
            {infoList.map((item, idx) => (
                <>
                    {item.detail ? (
                        <li className="info__wrap info__wrap--detail" key={idx}>
                            <div className="info__detail">
                                <p className="info__detail--title">
                                    파트너가 되면
                                    <br className="pc-hide" />
                                    이런 혜택들이 있어요!
                                </p>

                                <ul className="detail">
                                    {detailList.map((item, idx) => (
                                        <li className="detail__item" key={idx}>
                                            <span className="check-icon">체크 아이콘</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <p className="info__detail--text">
                                    <AlertMsg text={'회원가입은 PC로 진행해주세요.'}></AlertMsg>
                                </p>
                            </div>
                        </li>
                    ) : (
                        <li className="info__wrap" key={idx}>
                            <div className="info__title">{item.title}</div>
                            <div className="info__cont" dangerouslySetInnerHTML={{ __html: item.desc }}></div>
                        </li>
                    )}
                </>
            ))}
        </ul>
    );
}

export default EventInfo;
