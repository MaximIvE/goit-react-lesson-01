import ReactDOM from 'react-dom';
import './index.css';
import clap from './clap.wav';
import App from './App';


// const elem1 = <span>Привіт </span>;
// const elem2 = <span>світ</span>;

// const jsxElem = (
// <div>
//   {elem1}
//   {elem2}
// </div>
// );


// console.log(jsxElem);





// ReactDOM.render(
// <Painting 
//   url={data.url} 
//   title={data.title} 
//   price={data.price} 
//   authorUrl={data.author.url} 
//   authorTag={data.author.tag}
// />, 
// document.querySelector('#root') );

ReactDOM.render(<App/>, document.querySelector('#root') );


var audio = new Audio(clap);

document.onclick = function() {
  audio.volume = 0.08;
  audio.play();
};




// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
