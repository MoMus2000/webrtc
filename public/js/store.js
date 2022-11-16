let state={
    socketId: null,
    localStream: null,
    remoteStream: null,
    screenSharingStream: null,
    allowConnectionsFromStranger: false,
    screenSharingActive: false,
}

export const setSocketId = (sockedId) => {
    state = {
        ...state,
        socketId: sockedId
    }
}

export const setLocalStream = (stream) => {
    state = {
        ...state, 
        localStream: stream
    }
}

export const setAllowConnectionsFromStrangers = (allowConnection) => {
    state = {
        ...state,
        allowConnectionsFromStranger: allowConnection
    }
}

export const setScreenSharing = (screenSharingActive) => {
    state = {
        ...state,
        screenSharingActive
    }
}

export const setScreenSharingStream = (screenSharingStream) => {
    state = {
        ...state,
        screenSharingStream
    }
}

export const setRemoteStream = (remoteStream) => {
    state = {
        ...state, 
        remoteStream
    }
}

export const getState = ()=>{
    return state
}