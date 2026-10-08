import express from 'express';
import {createServer} from'http';
import {Server} from 'socket.io';

import notificationRouter from './Router/NotificationRouter.js';

const app = express();
const server= createServer(app);

const io = new Server(server,{
    cors:{
        origin:'*'
    }
});

app.use(express.json());
app.use(express.static('public'));

notificationRouter(io);

server.listen(5000,()=>{
    console.log("server is connected on port 5000")
})
