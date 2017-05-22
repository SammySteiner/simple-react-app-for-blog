import React, {Component} from 'react'

export default class App extends Component {
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
      <div className={'zoobook'}>

        <nav className={`navbar navbar-inverse`}>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <a className='navbar-brand'>
                PetBook
              </a>
            </div>
          </div>
        </nav>
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

          <div className="col s6">
            <div className='zoo-list'>
              <h3>Your Pets</h3>
              <ul>
                {this.state.animals.map(function(animal) {return <div className="card-panel" key={animal}>{animal}</div>})}
              </ul>
            </div>
          </div>

        </div>

      </div>
    )
  }
}
