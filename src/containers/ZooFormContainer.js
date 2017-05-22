import React, {Component} from 'react'
import ZooList from '../components/ZooList'
export default class ZooFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      nameInput: '',
      speciesInput: '',
      picInput: '',
      animals: []
    }
  }
  handleNameChange(e){
    this.setState({
      nameInput: e.target.value
    })
  }

  handleSpeciesChange(e){
    this.setState({
      speciesInput: e.target.value
    })
  }

  handlePicChange(e){
    this.setState({
      picInput: e.target.value
    })
  }


  handleSubmit(e) {
    e.preventDefault()
    let animal = {name: this.state.nameInput, species: this.state.speciesInput, pic: this.state.picInput}
    this.setState({
      animals: [...this.state.animals, animal]
    })
    this.setState({
      nameInput: '',
      speciesInput: '',
      picInput: ''
    })
  }
  render() {
    return (
      <div className="row">
        <div className="col s6">
          <div className={'zoo-form'}>
            <h3>Add a Pet</h3>
            <form onSubmit={this.handleSubmit.bind(this)}>
              <label>
                Animal Name:
                <input type='text' value={this.state.nameInput} onChange={this.handleNameChange.bind(this)}/>
              </label>
              <label>
                Animal Species:
                <input type='text' value={this.state.speciesInput} onChange={this.handleSpeciesChange.bind(this)}/>
              </label>
              <label>
                Animal Profile Pic:
                <input type='text' value={this.state.picInput} onChange={this.handlePicChange.bind(this)}/>
              </label>

              <input className="waves-effect waves-light btn" type='submit' value='Add Animal'/>
            </form>
          </div>
        </div>
        <ZooList animals={this.state.animals}/>
      </div>
    )
  }
}
