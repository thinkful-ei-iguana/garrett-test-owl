import React from 'react';

function Stage(props) {
  return (
    <div className="Stage">
      <h1>On Stage</h1>
      {
        props.participantsOnStage.map(p => 
          <div className="stage-Participant">
            <h2>{p.name}</h2> 
            <img src={p.avatar} alt="avatar"/>
          </div>                     
        )
      }
    </div>
  )
}

export default Stage;