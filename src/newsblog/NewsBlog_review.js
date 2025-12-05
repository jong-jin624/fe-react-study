import { useState } from 'react';
import './NewsBlog.css';
import './Modal.js';
import Modal from './Modal.js';

function NewsBlog_review() {

    let title = "React Study";

    let [news1, setNew1] = useState('오늘의 뉴스');
    let [news2, setNew2] = useState('어제의 뉴스');
    let [news3, setNew3] = useState('내일의 뉴스');

    let [news, setNews] = useState(['오늘의 뉴스', '어제의 뉴스', '내일의 뉴스']);
    let [likeCountArr, setLikeCountArr] = useState([0, 0, 0]);

    let [likeCount, setLikeCount] = useState(15);

    let [modalFlag, setModalFlag] = useState(false);

    return (
        <div>
            <div className='black-nav'>
                <h3>Blog Header</h3>
                <div style={{ color: "orange", fontSize: "20px" }}>{title}</div>
            </div>


            <div className='post-list'>
                <h4 onClick={() => {

                    // setModalFlag(!modalFlag);
                    setModalFlag(modalFlag ? false : true);
                    // if (modalFlag == true) {
                    //     setModalFlag(false);
                    // } else {
                    //     setModalFlag(true);
                    // }

                }}>{news[0]}
                    <span onClick={(event) => {
                        event.stopPropagation();
                        setLikeCount(likeCount + 1);
                    }}>❤{likeCount}</span>
                </h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news[1]}</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news[2]}</h4>
                <p>내용</p>
            </div>

            {/* <div className='post-list'>
                <h4>오늘의 뉴스</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news2}</h4>
                <p>내용</p>
            </div>
            <div className='post-list'>
                <h4>{news3}</h4>
                <p>내용</p>
            </div> */}

            {
                // modalFlag == true ? <Modal /> : null
            }
            {
                modalFlag && <Modal />
            }

        </div>

    )
}

export default NewsBlog_review;