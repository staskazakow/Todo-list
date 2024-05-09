import React from 'react'

export default function AddTodo({add,value,setValue}) {
  return (
    <div className="AddTodo">
        <div >Оставьте заметку</div>
        <input placeholder='Введите текст' value={value} type="text" onChange={el => setValue(el.target.value)} />
        <button type='button' onClick={() => add(value)}>Добавить</button>
    </div>
  )
}
