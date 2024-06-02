import React from 'react';

interface TodoItemProps {
  todo: string;
  index: number;
  removeTodo: (index: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, index, removeTodo }) => {
  return (
    <div className="flex justify-between items-center p-2 bg-gray-100 rounded-lg my-2 shadow">
      <span>{todo}</span>
      <button 
        className="bg-red-600 text-white p-1 rounded"
        onClick={() => removeTodo(index)}
      >
        Remove
      </button>
    </div>
  );
};

export default TodoItem;
