import 'babel-polyfill';
import {ipcRenderer} from 'electron';

import '../css/app.css';

// IPC events
ipcRenderer.on('system:pong', 
  (event, rows) => console.log("got PONG!", rows)
);

// IPC commands
ipcRenderer.send('system:ping', null);
console.log("send PING!");