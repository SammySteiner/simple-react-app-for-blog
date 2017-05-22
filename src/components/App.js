import React, {Component} from 'react'
import NavBar from './NavBar'
import PetFormContainer from '../containers/PetFormContainer'

function App() {
  return (
    <div className={'zoobook'}>
      <NavBar />
      <PetFormContainer />
    </div>
  )
}
export default App
