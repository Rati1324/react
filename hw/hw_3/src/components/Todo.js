import React, {useState} from 'react'
import EditTodo from './EditTodo';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../slices/todoSlice';

export default function Todo(props) {
  const [toggleEdit, setToggleEdit] = useState(false);
  const dispatch = useDispatch();
  
  return (
    <div key={props.id} style={ props.finished ? {backgroundColor: "red"} : null }>
      {props.title}
      <button onClick={() => dispatch(toggleTodo({id: props.id, toggle: !props.finished}))}>Finished</button>
      <button onClick={() => dispatch(deleteTodo(props.id))}>Delete</button>
      {toggleEdit ? <EditTodo todoId={props.id} setToggleEdit={() => setToggleEdit()}/> : null}
      <button onClick={() => setToggleEdit(true)}>Edit</button>
    </div>
  )
}
