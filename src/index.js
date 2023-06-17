import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import data from "./data.json";

// const root = document.getElementById('root');
//root.append(div)

// const paragraph = React.createElement('p', {
//   id: "test-P-id",
//   children: ['I am P'],
// });

const p = <p id="test-P-Id" >I am P</p>


const div = <div name="main" id="test-id" className="class-list">{p}</div>;
// const div = React.createElement('div', {
//   name: 'main',
//   id: 'test-id',
//   className: 'class-list',
//   children: paragraph,
// }
// );

console.log('div>>>>', div);

ReactDOM.createRoot(document.getElementById('root')).render(div);



// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//   </React.StrictMode>
// );
