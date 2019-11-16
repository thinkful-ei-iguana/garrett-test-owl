import React from 'react';

function ChatLog(props) {
  if(props.chatEvents.length === 0 || props.participants.length === 0) {
    return (
      <div className="ChatLog">
        <h1>Chat Log</h1>
        Nobody!
      </div>
    )
  }


  let activeParticipants = [];
  for (let i = 0; i < props.chatEvents.length; i++) {
    const participantId = props.chatEvents[i].participantId;
    for (let k = 0; k < props.participants.length; k++) {
      if (participantId === props.participants[k].id) {
        activeParticipants.push(Object.assign({}, props.chatEvents[i], { name: props.participants[k].name, avatar: props.participants[k].avatar }));
      }
    }
  }
  
  return (
    <div className="ChatLog">
      <h1>Chat Log</h1>
      {
        activeParticipants.map(p =>
          <div className="activeParticipant"> 
            <img src={p.avatar} alt="avatar" />
            <h2>{p.name}</h2>
            { 
              p.type === 'message' && 
              <div>
                <span>{Date(p.timestamp)}</span> <br/>
                <span>{p.message}</span>
              </div>
            }
            { 
              p.type === 'thumbs-up' && 
              <span>THUMBS UP</span>
            }
            { 
              p.type === 'thumbs-down' && 
              <span>THUMBS DOWN</span>
            }
            { 
              p.type === 'raise-hand' && 
              <span>RAISE HAND</span>
            }
            { 
              p.type === 'clap' && 
              <span>CLAP</span>
            }
            { 
              p.type === 'join' && 
              <span>JOINED</span>
            }
            { 
              p.type === 'leave' && 
              <span>LEFT</span>
            }
            { 
              p.type === 'join-stage' && 
              <span>JOINED STAGE</span>
            }
            { 
              p.type === 'leave-stage' && 
              <span>LEFT STAGE</span>
            }
          </div>
        )
      }
    </div>
  )
}

export default ChatLog;