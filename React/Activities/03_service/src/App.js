import logo from './logo.svg';
import './App.css';
import Notification from './components/Notification';
import Page from './components/Page';
import {NotificationContext} from './state'
import { useReducer } from 'react';

function reducer(state, item) {
  return [...state, item]
}

function App() {
  const [notifications, addNotification] = useReducer(reducer, [])

  return (
    <div className="App">
      <NotificationContext.Provider value={{notifications, addNotification}}>
        <div className="app">
          <Page></Page>
        </div>
        
        <div className="notifications">
          <Notification></Notification>
        </div>
      </NotificationContext.Provider>
    </div>
  );
}

export default App;
