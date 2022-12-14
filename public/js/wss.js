import * as store from "./store.js"
import * as ui from "./ui.js"

export const registerSocketEvent = (socket) => {
    socket.on('connect', ()=>{
        console.log("successfully connected to websocket server")
        store.setSocketId(socket.id)
        ui.updatePersonalCode(socket.id)
    })
}