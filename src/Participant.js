import React from 'react';

function Participant(props) {
  return (
    <div className="Participant">
      <img src={props.avatar} alt="Avatar" />
      <h6>{props.name}</h6>
      <span>On Stage: { `${props.onStage}` }</span><br/>
      <span>In Session: { `${props.inSession}` }</span>
    </div>
  );
}

export default Participant;