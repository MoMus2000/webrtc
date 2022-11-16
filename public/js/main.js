import * as state from "./store.js"
import * as wss from "./wss.js"
import * as webRTCHandler from "./webRTCHandler.js"
import * as constants from "./constants.js"

document.body.style.zoom="75%"

// Initialization of socketio connection
const socket = io("localhost:3000")
wss.registerSocketEvent(socket)

// registering event for personal code copy button
const personalCodeCopyButton = document.getElementById("personal_code_copy_button")
personalCodeCopyButton.addEventListener("click", ()=>{
    const personalCode = state.getState().socketId
    navigator.clipboard && navigator.clipboard.writeText(personalCode)
})

// register event listener for connection buttons

const personalCodeChatButton = document.getElementById("personal_code_chat_button")

const personalCodeVideoButton = document.getElementById("personal_code_video_button")

personalCodeChatButton.addEventListener("click", ()=>{
    console.log("chat button clicked")
    const calleePersonalCode = document.getElementById("personal_code_input").value
    const callType = constants.callType.CHAT_PERSONAL_CODE
    webRTCHandler.sendPreOffer(callType, calleePersonalCode)
})

personalCodeVideoButton.addEventListener("click", ()=>{
    console.log("video button clicked")
    const calleePersonalCode = document.getElementById("personal_code_input").value
    const callType = constants.callType.VIDEO_PERSONAL_CODE
    webRTCHandler.sendPreOffer(callType, calleePersonalCode)
})