import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
    return(
      <h1>My Custom App!</h1>
    )
}
// const ReactElement = {
//   type: 'a', // anchor tag
//   props: {
//      href: 'https://google.com',
//      target: '_blank'
//   },
//   children: 'click me to visit google' // Here..we have added content to the anchor tag
// }

const ReactElement = React.createElement(
  'a',
  {href: 'https://www.google.com', target: '_blank'},
  'click me to visit google' 
)

const anotherReactElement = (
  <a href="https://www.google.com" target='_blank'>Visit google </a>
)
ReactDOM.createRoot(document.getElementById('root')).render(
  myApp()
)
