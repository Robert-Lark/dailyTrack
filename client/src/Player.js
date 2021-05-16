import React from 'react';
import SpotifyPlayer from 'react-spotify-web-playback'

function Player({accessToken, trackUri}) {

    if (!accessToken) return null
    return <SpotifyPlayer 
    token={accessToken}
    showSaveIcon
    uris={trackUri ? [trackUri] : []}
    /> 
}

export default Player;