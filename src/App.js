import React from 'react';
import './App.css';
import List from './List';
import Stage from './Stage';
import ChatLog from './ChatLog';

function App(props) {
  const participants = props.store.participants;
  const participantsOnStage = participants.filter(p => p.onStage);
  const chatEvents = props.store.chatEvents;

  return (
    <div className="App">
      <List participants={participants}/>
      <Stage participantsOnStage={participantsOnStage}/>
      <ChatLog chatEvents={chatEvents} participants={participants}/>
    </div>
  );
}

export default App;