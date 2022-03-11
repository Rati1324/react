import { useContext } from "react"
import { ToDoContext } from "./context/ToDoContext"

const Todo = () => {
  // function handleTodoClick() {
  //   toggleTodo(ToDos.id)
  // }

  const {ToDos} = useContext(ToDoContext)

  return (
    <div>
      <label>
          {/* <input type="checkbox" onChange={handleTodoClick} checked={todo.complete} />
          {todo.name} */}
          {ToDos.map((el, i) => (
            <>
              <div>aposdiaspo</div>
              <h1 key={i}>{el.todo}</h1>
            </>
          ))}
      </label>
    </div>
  )
}

export default Todo