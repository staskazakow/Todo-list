import React from 'react'
import TodoItem from './TodoItem'

export default function Todo({list,deleteTodo}) {
  return (
    <div className='Todo'>
        {list.map(el => <TodoItem deleteTodo={deleteTodo} body={el}/>)}
    </div>
  )
}
