import AlertMsg from '../AlertMsg/AlertMsg';

const list = [
    {
        text: '당신의 제작소 홈페이지 우측 하단 <span class="highlight">채널톡 아이콘</span>을 클릭해주세요.',
        src: 'event-step1',
        altText: '채널톡 버튼 클릭',
    },
    {
        text: '홈이나 대화 메뉴의 <span class="highlight">문의하기 버튼</span>을 클릭해주세요.',
        src: 'event-step2',
        altText: '채널톡 문의하기 버튼 클릭',
    },
    {
        text: '<span class="highlight">SNS 홍보 이벤트</span>를 클릭해주세요.',
        src: 'event-step3',
        altText: 'SNS 홍보 이벤트 버튼 클릭',
    },
    {
        text: '가이드라인에 따라 성명, 전화번호, 이메일, 파트너공장명을 입력 후 <span class="highlight">저장</span> 버튼을 클릭해주세요.',
        src: 'event-step4',
        altText: 'form 입력 후 저장 버튼 클릭',
    },
    {
        text: `채널톡 대화창에 <span class="highlight">'이벤트 참여'</span> 입력 후 전송해주세요.`,
        src: 'event-step5',
        altText: '이벤트 참여 문구 전송',
    },
    {
        text: '이벤트 신청 완료!',
        src: 'event-step5',
        altText: '이벤트 참여 문구 전송',
    },
];

const listLength = list.length;

function Participation() {
    return (
        <div className="participation">
            <div className="participation__title">참여 방법</div>
            <div className="participation__cont">
                <p className="info__detail--text">
                    <AlertMsg dangerouslySetInnerHTML={{ __html: `당신의 제작소 파트너 회원이 아니라면 <br className="pc-hide" /> 파트너 회원이 되어주세요.` }}></AlertMsg>
                    <span className="error-icon">아이콘</span>당신의 제작소 파트너 회원이 아니라면
                    <br className="pc-hide" />
                    파트너 회원이 되어주세요.
                </p>
                <div className="timeline">
                    {list.map((item, idx) => (
                        <div className="timeline__wrap" key={idx}>
                            <div className="timeline__separator">
                                {listLength === idx + 1 ? (
                                    //마지막 스텝
                                    <div className="dot active confetti">
                                        <div className="confetti__icon">confetti 아이콘</div>
                                    </div>
                                ) : (
                                    <>
                                        <div className={`dot ${idx % 2 === 1 && `active`}`}></div> <div className="line"></div>
                                    </>
                                )}
                            </div>
                            <div className="timeline__box">
                                <div className="timeline__box--text">
                                    {listLength === idx + 1 ? (
                                        //마지막 스텝
                                        <div className="desc" style={{ marginTop: '0' }}>
                                            <p className="done">이벤트 신청 완료!</p>
                                        </div>
                                    ) : (
                                        <>
                                            <p className="num">STEP {idx + 1}</p>
                                            <div className="desc">
                                                <p dangerouslySetInnerHTML={{ __html: item.text }}></p>
                                                <img src={require('./../../assets/images/' + item.src + '.png')} alt={item.altText} />
                                            </div>
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Participation;
