import { useState } from "react";

function State03() {

    let [arr, setArr] = useState([1, 2, 3, 4, 5]);

    const btn_func = () => {

        let temp = [...arr];
        temp.push(9);
        setArr(temp);
        console.log(arr);
    }

    return (
        <div>
            <button onClick={btn_func}>버튼~</button>

            {
                arr.map((val) => {
                    return <p>{val}</p>
                })
            }

        </div>
    )
}

export default State03;