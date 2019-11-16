import React from 'react';
import Participant from './Participant';

function List(props) {
  return (
    <div className="List">
      {
        props.participants.map(p => <Participant 
          key={p.id}
          name={p.name}
          avatar={p.avatar}
          inSession={p.inSession}
          onStage={p.onStage}
        />)
      }
    </div>
  )
}

export default List;