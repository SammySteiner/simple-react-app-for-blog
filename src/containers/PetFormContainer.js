import React, {Component} from 'react'
import PetList from '../components/PetList'
export default class PetFormContainer extends Component {
  constructor() {
    super()
    this.state = {
      input: '',
      animals: []
    }
  }
  handleChange(e){
    this.setState({
      input: e.target.value
    })
  }
  handleSubmit(e) {
    e.preventDefault()
    this.setState({
      animals: [...this.state.animals, this.state.input]
    })
    this.setState({
      input: ''
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
                <input type='text' value={this.state.input} onChange={this.handleChange.bind(this)}/>
              </label>
              <input className="waves-effect waves-light btn" type='submit' value='Create Animal'/>
            </form>
          </div>
        </div>
        <PetList animals={this.state.animals}/>
      </div>
    )
  }
}
