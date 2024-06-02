import React, { useState } from 'react';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<string[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo]);
      setNewTodo('');
    }
  };

   const removeTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-5 bg-blue-500 rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-5">Todo List</h1>
      <div className="flex mb-4">
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add todo"
          className="border p-2 flex-grow rounded-l-lg text-lg"
        />
        <button 
          onClick={addTodo} 
          className="bg-blue-900 text-white p-2 rounded-r-lg"> Add </button>
      </div>
      <div>

        {todos.map((todo, index) => (
          <TodoItem key={index} index={index} todo={todo} removeTodo={removeTodo} />
        ))}

      </div>
    </div>
  );
};

export default TodoList;
