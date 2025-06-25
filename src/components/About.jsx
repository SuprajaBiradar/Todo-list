// import React from 'react'

// const About = () => {
//   return (
//     <div>
//         <h3>📝 About This Project</h3>
//         <p>
//         My To-Do List is a simple and efficient task management web application built using React. It allows users to add, delete, and manage their daily tasks in a clean and intuitive interface. All tasks are stored in the browser’s local storage, ensuring that your data is preserved even after refreshing or closing the browser. The app is designed to help users stay organized and boost productivity by keeping track of what needs to be done, all in one place.
//         </p>
//         <br />
//         <h3>🎯 Purpose</h3>
//         <p>
//         This project demonstrates core React concepts such as state management, component-based architecture, props, hooks (useState, useEffect), and routing with react-router-dom. It is also a good example of how to integrate localStorage for persistent data storage in frontend apps.
//         </p>
//         <br />
//         <h3>✅ Features</h3>
//         <p>
//             <div>🆕 Add Tasks – Add new tasks with a title and description</div>
//             <div>❌ Delete Tasks – Remove tasks that are completed or no longer needed</div>
//             <div>💾 Data Persistence – Tasks are saved in the browser using localStorage</div>
//             <div>🔄 Live Updates – Real-time task updates using React hooks</div>
//             <div>🧭 Routing – Navigation between Home and About pages using react-router-dom</div>
//             <div>📱 Responsive Design – Works across desktops, tablets, and mobile devices</div>
//         </p>
//         <br/>
//         <h3>🚀 How to Use</h3>
//         <p>
//             <div>1. Visit the Home page.</div>
//             <div>2. Enter a task title and description, then click "Add Todo".</div>
//             <div>3. View your active tasks listed below.</div>
//             <div>4. Click the Delete button to remove completed or irrelevant tasks.</div>
//             <div>5. Visit the About page to learn more about the app.</div>
//         </p>
//     </div>
//   )
// }

// export default About



import React from 'react';

const About = () => {
  return (
    <div className="container" style={{padding: '2rem'}}>
      <h3>📝 About This Project</h3>
      <p>
        <strong>My To-Do List</strong>
        {' '}
        is a simple and efficient task management web application built using
        {' '}
        <strong>React</strong>
        .
        It allows users to add, delete, and manage their daily tasks in a clean and intuitive interface. All tasks are stored in the browser’s
        local storage, ensuring that your data is preserved even after refreshing or closing the browser. The app is designed to help users
        stay organized and boost productivity by keeping track of what needs to be done, all in one place.
      </p>
      <br/>
      <h3>🎯 Purpose</h3>
      <p>
        This project demonstrates core React concepts such as state management, component-based architecture, props, hooks
        (
        <code>useState</code>
        ,
        {' '}
        <code>useEffect</code>
        ), and routing with
        {' '}
        <code>react-router-dom</code>
        . It is also a good example
        of how to integrate
        {' '}
        <code>localStorage</code>
        {' '}
        for persistent data storage in frontend apps.
      </p>
      <br/>
      <h3>✅ Features</h3>
      <ul>
        <li>
          🆕
          {' '}
          <strong>Add Tasks</strong>
          {' '}
          – Add new tasks with a title and description
        </li>
        <li>
          ❌
          {' '}
          <strong>Delete Tasks</strong>
          {' '}
          – Remove tasks that are completed or no longer needed
        </li>
        <li>
          💾
          {' '}
          <strong>Data Persistence</strong>
          {' '}
          – Tasks are saved in the browser using
          {' '}
          <code>localStorage</code>
        </li>
        <li>
          🔄
          {' '}
          <strong>Live Updates</strong>
          {' '}
          – Real-time task updates using React hooks
        </li>
        <li>
          🧭
          {' '}
          <strong>Routing</strong>
          {' '}
          – Navigation between Home and About pages using
          {' '}
          <code>react-router-dom</code>
        </li>
        <li>
          📱
          {' '}
          <strong>Responsive Design</strong>
          {' '}
          – Works across desktops, tablets, and mobile devices
        </li>
      </ul>
    <br/>
      <h3>🚀 How to Use</h3>
      <ol>
        <li>Visit the <strong>Home</strong> page.</li>
        <li>
          Enter a task title and description, then click
          {' '}
          <strong>"Add Todo"</strong>
          .
        </li>
        <li>View your active tasks listed below.</li>
        <li>
          Click the
          {' '}
          <strong>Delete</strong>
          {' '}
          button to remove completed or irrelevant tasks.
        </li>
        <li>
          Visit the <strong>About</strong> page to learn more about the app.
        </li>
      </ol>
    </div>
  );
};

export default About;
