import React from 'react'

const Location = ({locationinfo}) => {



  return (
    <article>
      <h2>{locationinfo?.name}</h2>
      <ul>
        <li><span>Type: </span>{locationinfo?.type}</li>
        <li><span>Dimension: </span>{locationinfo?.dimension}</li>
        <li><span>Population: </span>{locationinfo?.residents.length}</li>
      </ul>
    </article>
  )
}

export default Location