import { useState } from "react";


function State01() {

    let cnt = 0;
    let [count, setCount] = useState(0);
    let [num, setNum] = useState(0);

    return (
        <div className="App">
            <h1>State01</h1>
            <p>{cnt}</p>
            <button onClick={() => {
                console.log('cnt증가버튼 클릭됨');
                cnt++;
                console.log(cnt);

                num++;
                console.log(num);
            }}>cnt증가버튼</button>

            <br></br>

            <p>{count}</p>
            <button onClick={() => {
                console.log('count증가버튼 클릭됨');
                // count++;
                setCount(count + 1);
                setNum(num);
                console.log(count);
            }}>count증가 버튼</button>

        </div>
    )
}

export default State01;
