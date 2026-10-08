 const connectUser = (socket) => {

    console.log("User connected");

    console.log("Socket ID:", socket.id);

    socket.emit("notification", {
        title: "Welcome",
        message: "You are connected to notification server",
       
    });
};

const triggerNotification = (data, io, socket) => {

    console.log("Notification received:", data);

    
    // Send notification to all connected users
    io.emit("notification", {
        title: data.title,
        message: data.message
    });

};

 const disconnectUser = (socket) => {

    console.log("User disconnected");

    console.log("Socket ID:", socket.id);

};

export{
    connectUser,
    triggerNotification,
    disconnectUser
}