import { useState } from 'react';
import './NewsBlog.css';
import './Modal.js';
import Modal from './Modal.js';


function NewsBlog2() {

    let title = "React Study";

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);

    let [likeCount, setLikeCount] = useState([999, 777, 12345]);

    let [modalFlag, setModalFlag] = useState(false);
    let [selectedIdx, setSelectedIdx] = useState(0);
    let [selectedTitle, setSelectedTitle] = useState('');
    let [selectedLikeCount, setSelectedLikeCount] = useState(0);

    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>

            {
                news.map((item, index) => {
                    return (
                        <div className='post-list' key={index}>
                            <h4 onClick={() => {
                                setModalFlag(!modalFlag);
                                setSelectedIdx(index);
                                setSelectedTitle(item);
                            }}>
                                {news[index]}
                                <span onClick={(event) => {
                                    event.stopPropagation();

                                    let copy = [...likeCount];
                                    copy[index] += 1;
                                    setLikeCount(copy);

                                }}>❤ {likeCount[index]}</span>
                            </h4>
                            <p>내용</p>
                        </div>
                    )
                })
            }

            <button onClick={() => {
                let temp = [...news];
                temp[0] = 'Today News';
                setNews(temp);
            }}>첫글 제목 변경</button>


            {
                modalFlag && <Modal news={news} setNews={setNews} />

            }

        </div>
    )
}

export default NewsBlog2;
