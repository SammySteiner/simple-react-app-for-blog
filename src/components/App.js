import React, {Component} from 'react'
import NavBar from './NavBar'
import ZooFormContainer from '../containers/ZooFormContainer'

function App() {
  return (
    <div className='zoobook'>
      <NavBar />
      <ZooFormContainer />
    </div>
  )
}
export default App
