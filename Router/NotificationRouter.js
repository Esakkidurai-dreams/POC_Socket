import{
    connectUser,
    triggerNotification,
    disconnectUser
}from "../Controller/NotificationController.js";

const notificationRouter = (io) =>{
    io.on('connection',(socket)=>{
        connectUser(socket,io);

        socket.on('sendNotification',(data)=>{
            triggerNotification(data,io,socket);
        });

        socket.on('disconnect',()=>{
            disconnectUser(socket);
        });
    });
};

export default notificationRouter;