const express = require("express")
const http = require("http")
const { SocketAddress } = require("net")

const PORT = 3000

const app = express()
const server = http.createServer(app)
const io = require("socket.io")(server)

app.use(express.static("public"))

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/public/index.html")
})

connectedPeers = []

io.on('connection', (socket)=>{
    console.log("User connected to the socket")
    connectedPeers.push(socket.id)

    console.log(connectedPeers)

    socket.on('disconnect', ()=>{
        console.log('disconnected')
        newConnectedPeers = connectedPeers.filter((peerSockedId) => {
            return peerSockedId != socket.id
        })
        connectedPeers = newConnectedPeers
        console.log(connectedPeers)
    })
})

server.listen(PORT, ()=>{
    console.log("Listening on", PORT)
})