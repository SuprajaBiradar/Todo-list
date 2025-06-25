// import React, { useState } from 'react';

// const AddTodo = ({addTodo}) => {
//     const [title, setTitle] = useState("");
//     const [desc, setDesc] = useState("");
//     const submit=(e)=>{
//         e.preventDefault();
//         if(!title || !desc)
//         {
//             alert("Add Title and Description")
//         }
//         else{
//         addTodo(title, desc);
//         setTitle("");
//         setDesc("");
//         }
//     }
//   return (
//     <div className='container my-3'>
//         <h3>Add a Todo</h3>
//       <form onSubmit={submit}>
//         <div className="mb-3">
//           <label htmlFor="title" className="form-label">
//             Todo Title
//           </label>
//           <input
//             type="text"
//             value={title}
//             onChange={(e)=>{setTitle(e.target.value)}}
//             className="form-control"
//             id="title"
//             aria-describedby="emailHelp"
//           />
//         </div>
//         <div className="mb-3">
//           <label htmlFor="desc" className="form-label">Todo Description</label>
//           <input
//             type="text"
//             value= {desc}
//             onChange={(e)=>{setDesc(e.target.value)}}
//             className="form-control"
//             id="desc"
//           />
//         </div>
//         <button type="submit" className="btn btn-sm btn-success">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default AddTodo;



import React, {useState} from 'react';

const AddTodo = ({addTodo}) => {
  const [title, setTitle] = useState ('');
  const [desc, setDesc] = useState ('');

  const submit = e => {
    e.preventDefault ();
    if (!title || !desc) {
      alert ('Add Title and Description');
    } else {
      addTodo (title, desc);
      setTitle ('');
      setDesc ('');
    }
  };

  return (
    <div className="container my-4 p-4 rounded shadow-sm add-todo-card">
      <h3 className="mb-3 text-primary">📝 Add a Todo</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label fw-semibold">
            Todo Title
          </label>
          <input
            type="text"
            value={title}
            onChange={e => setTitle (e.target.value)}
            className="form-control custom-input"
            id="title"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="desc" className="form-label fw-semibold">
            Todo Description
          </label>
          <input
            type="text"
            value={desc}
            onChange={e => setDesc (e.target.value)}
            className="form-control custom-input"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-success btn-sm px-4">
           Submit
        </button>
      </form>
    </div>
  );
};

export default AddTodo;
