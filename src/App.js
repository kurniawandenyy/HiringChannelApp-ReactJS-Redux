import React from 'react'
import Main from './web/Main'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './web/redux/store'

function App() {
  return (
    <>
      <Main />
    </>
  )
}

function Root(){
  return(
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  )
}

export default Root;
