import React from 'react'
function ZooList( props ) {
  return (
    <div className="col s6">
      <div className='zoo-list'>
        <h3>Your Zoo Friends</h3>
        <ul>
          {props.animals.map(function(animal) {
            return (
              <div className="card-panel" key={animal.name}>
                <div className="card-image">
                  <img src={animal.pic} />
                </div>
                {animal.name} is a {animal.species}
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
export default ZooList
