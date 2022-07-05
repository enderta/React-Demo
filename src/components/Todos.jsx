import React from 'react'
import { Button } from 'react-bootstrap';

const Todos = () => { const [todos, setTodos] = React.useState([
    { id: 1, text: 'Learn React', completed: false },
  ]);
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = () => {
    setTodos([...todos, { id: todos.length + 1, text: newTodo, completed: false }]);
    setNewTodo('');
  }
const deleteTodo = (id) => {
  setTodos(todos.filter(todo => todo.id !== id));
}
const toggleTodo = (id) => {
  setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
}



  return (
    <>
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="card">
          <div className="card-header">
            <h3>Todos</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <input
                    type="text" 
                    className="form-control"
                    placeholder="Add Todo"
                    value={newTodo}
                    onChange={e => setNewTodo(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Button cButton variant="primary" onClick={addTodo}>Add</Button>
              </div>
            </div>
            <div className="row"> 
              <div className="col-md-12">
               <table className="table table-striped">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Todo</th>
                      <th>Completed</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {todos.map(todo => (
                      <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.text}</td>
                        <td><form className='check'>
                          <input type="checkbox" checked={todo.completed} onChange={() => toggleTodo(todo.id)} />

                        </form></td>
                        <td>
                          <Button variant="danger" className='danger' onClick={() => deleteTodo(todo.id)}>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>



      
    </>
  )
}

export default Todos