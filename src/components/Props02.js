import { useState } from "react";
import Box from "./Box";

function Props02() {

    // let [textArr, setTextArr] = useState(['아침', '점심', '저녁']);
    // let [detailArr, setDetailArr] = useState(['배고프다', '졸리다', '피곤하다']);

    return (
        <div>
            <button onClick={() => {

                // textArr.push('야식');
                // let temp = [...textArr];
                // temp.push('야식');
                // setTextArr(temp);
                // detailArr.push('행복하다');
                // setDetailArr(detailArr);

                console.log(textArr);
                console.log(detailArr);

            }}>내용추가버튼</button>
            
            {
                textArr.map((item, index) => {
                    return <Box text={textArr[index]} detail={detailArr[index]} key={index} />
                })
            }

        </div>
    )


}

export default Props02;