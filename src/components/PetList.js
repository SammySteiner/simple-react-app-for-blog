import React from 'react'

function PetList( props ) {
  return (
    <div className="col s6">
      <div className='zoo-list'>
        <h3>Your Pets</h3>
        <ul>
          {props.animals.map(function(animal) {return <div className="card-panel" key={animal}>{animal}</div>})}
        </ul>
      </div>
    </div>
  )
}
export default PetList
