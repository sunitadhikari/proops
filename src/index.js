import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <>
  <div className='cards'>
    <div className='card'>
      <img src="disable.jpg" height="300px" width="300px"  alt="myPic" className='card_img'></img>
      <div className='card_info'>
        <span className='"card_category'>A Netflix Original Series</span>
        <h3 className='card_title'>DARK</h3>
        <a href="" target="blank">
          <button>Watch Now</button>
        </a>
      </div>
    </div>    
  </div>
 </>,
 document.getElementById('root')
);
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
