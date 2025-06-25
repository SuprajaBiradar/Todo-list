// import React from 'react'
// import TodoItem from './TodoItem'
// const Todos = (props) => {
//   let myStyle={
//     minHeight: "70vh",
//     margin: "40px auto"
//   }
//   return (
//     <div className='container' style={myStyle}>
//       <h3 className='my-3'>Todos List</h3>
//       {props.todos.length===0? "No Todos to display":
//       props.todos.map((todo)=>
//       {
//         return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete}/>)
//       })}
      
//     </div>
//   )
// }

// export default Todos

import React from 'react';
import TodoItem from './TodoItem';

const Todos = props => {
  let myStyle = {
    minHeight: '70vh',
    margin: '40px auto',
  };

  return (
    <div className="container todos-container" style={myStyle}>
      <h3 className="my-3 todos-heading">📝 Todos List</h3>
      {props.todos.length === 0
        ? <p className="no-todos-msg">
            🎉 You’re all caught up! No todos to display.
          </p>
        : props.todos.map (todo => {
            return (
              <TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default Todos;
