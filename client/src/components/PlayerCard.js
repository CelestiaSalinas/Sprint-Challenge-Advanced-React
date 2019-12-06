import React from 'react'


const PlayerCard = props => {
    console.log(props.players)
    return(
    <div className='card'>
<h1 className='name'>{props.data.name}</h1>
    <h2 className='country'>Country: {props.data.country}</h2>
<p>Searches: {props.data.searches}</p>
    <p>ID: {props.data.id}</p>
    </div>
)}

export default PlayerCard