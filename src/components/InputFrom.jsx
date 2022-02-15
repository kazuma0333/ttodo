import React, { useState } from 'react'

export const InputFrom = ({taskList, setTaskList}) => {

    const [inputText, setInputText] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        //タスクを追加する
        setTaskList([
            ...taskList,
            {
                text: inputText
            }
        ]);
        //入力した文字を消す
        setInputText("")
    }

    //inputに打ち込んだ文字をコンソールに出力したい
    const handleChange = (e) => {
        setInputText(e.target.value)
    }

  return (
    <div className='send'>
        <input type="text" placeholder="やることを入力" onChange={handleChange} value={inputText}></input>
        <form onSubmit={handleSubmit}>
            <button disabled={!inputText}>追加</button>
        </form>
    </div>
  )
}