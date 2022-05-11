import React, {useEffect} from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { deleteAll, deleteTodo, getTodos } from '../slices/todoSlice';
import Todo from './Todo';

export default function Todos() {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTodos());
  }, [])

  return (
    <div>
      <button onClick={() => dispatch(deleteAll())}>Delete all</button>
      {todos.data && todos.data.map((t) => (
        <Todo id={t.id} finished={t.finished} title={t.title} key={t.id}/>
      ))}
    </div>
  )
}
