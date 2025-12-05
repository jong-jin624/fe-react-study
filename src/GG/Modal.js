function Modal(props) {
    return (
        <div className="modal">
            <h3>{props.title} ❤ {props.likeCount}</h3>
            <p>날짜</p>
            <p>상세내용</p>
            <button onClick={() => {
                let temp = [...props.news];
                temp[0] = '긴급뉴스';
                props.setNews(temp);
            }}>
                첫글 제목 긴급 변경
            </button>
        </div>
    );
}

export default Modal;