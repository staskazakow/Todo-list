import React from 'react'

export default function TodoItem({deleteTodo,body}) {
  return (
    <div className="TodoItem">
    <div>{body}
    </div>
    <button onClick={() => deleteTodo(body)} className='delete'>Удалить</button>
    </div>
  )
}
