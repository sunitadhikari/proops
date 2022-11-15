import React from 'react';
import ReactDOM from 'react-dom';
import Card from "./Cards";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <>
  <Card imgsrc="disable.jpg"
  sname= "DARK"
   title="A Netflix Original Series"
   
   link="https://www.netflix.com/np/"
   />
  <Card imgsrc="disab.jpg"
  sname= "Facebook"
   title="A Netflix Original Series"
   
   link="https://www.facebook.com/"/>
  <Card imgsrc="disablee.jpg"
   title="A Netflix Original Series"
   sname= "Instagram"
   link="https://www.instagram.com/"/>

  </>, 
  document.getElementById("root")
  );
 


{/* // const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(); */}
