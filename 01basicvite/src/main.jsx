import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp(){
  return(
    <h1>Custom app !</h1>
  )
}

// const ReactElement = {

//   type: 'a',
//   props:{
//    href:'http://google.com',
//    target:'_blank',

//   },

//   Children:'click me to visit google'

// }


 const anotherElement = (
  <a href="https://google.com" target = "_blank">vist me</a> 
 )
 const anotherUser ="chai aur code"
 const reactELement = React.createElement(
  'a',
  {
    href:"https:google.com",
    target:"_blank"
  },
  'click me to visit',anotherUser //evaluted expression at the end conert in object 
 )




ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    // <ReactElement/>
  // </React.StrictMode>,

  // anotherElement
   reactELement
 
)
