import { useState } from "react";


function State02() {

    let msgArr = ["안녕", "안녕", "안녕", "안녕"];

    let numArr = [1, 1, 1, 1];


    let elArr = [];
    for(let i=1; i<=5; i++){
        elArr.push(<p>Hi Hello~</p>)
    }

    let text = "";
    for(let i=1; i<=5; i++){
        text += "<p>Hi Hello~</p>";
    }


    return (
        <div>
            {
                msgArr.map((msg) => {
                    return (
                        <p>{msg}</p>
                    )
                })

            }

            <hr />

            {
                numArr.map(() => {
                    return (
                        <p>안녕하세요~</p>
                    )
                })

            }
        </div>
    )
}

export default State02;
