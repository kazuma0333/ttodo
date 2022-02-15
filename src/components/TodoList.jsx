import React from 'react'

export const TodoList = ({taskList, setTaskList}) => {
  return (
    //<div =className"todo">の中の要素を下に表示する
    <div className='todos'>
      {taskList.map((task,index) =>
        <div className='todo' key={index}>
         <div className='todoText'>
            <span>
              <ul>
                <li>{task.text}</li>
              </ul>
            </span>
         </div>
        </div>
        )}
    </div>
  )
}