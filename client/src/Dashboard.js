import {useState, useEffect} from "react";
import useAuth from "./useAuth";

import SpotifyWebApi from "spotify-web-api-node";
import Player from "./Player";
import styled from "styled-components";

const spotifyApi = new SpotifyWebApi({
  clientId: "e69e43bc2c054f71a639b83ace048100",
});

export default function Dashboard({code}) {
  const [track, setTrack] = useState();
  const accessToken = useAuth(code);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.setAccessToken(accessToken);
  }, [accessToken]);

  useEffect(() => {
    if (!accessToken) return;
    spotifyApi.getPlaylist("4LDCwmxhcGXrmADIM40qNc").then((data) => {
      const todaysTrack = data.body.tracks.items[0].track;
      console.log(todaysTrack);
      setTrack({
        artist: todaysTrack.album.artists,
        album: todaysTrack.album.name,
        title: todaysTrack.name,
        releaseDate: todaysTrack.album.release_date,
        albumUrl: todaysTrack.album.images[1],
        trackUri: todaysTrack.uri,
      });
    });
  }, [accessToken]);
  return track ? (
    <Container>
      <SongInfo>
        <ArtistContainer>
          <h1 style={{marginRight: "5px"}}>Artist:</h1>
          {track.artist.map((musician, i) => {
            if (i === track.artist.length - 1) {
              return <h1 key={musician.name}>{musician.name}</h1>;
            } else {
              return <h1 key={musician.name}>{musician.name} + </h1>;
            }
          })}
        </ArtistContainer>
        <h1>Album: {track.album}</h1>
        <h1>Title: {track.title}</h1>
        <h1>Release Date: {track.releaseDate}</h1>
        <ImageContainer>
          <img src={track.albumUrl.url} alt="cover" />
        </ImageContainer>
      </SongInfo>
      <PlayerContainer>
        <Player accessToken={accessToken} trackUri={track.trackUri} />
      </PlayerContainer>
    </Container>
  ) : (
    <LoadingContainer>
      <h3>Loading</h3>
    </LoadingContainer>
  );
}

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  background-color: #f36583;
`;

const ArtistContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const SongInfo = styled.div`
  width: 50vw;
  text-align: center;
`;
const ImageContainer = styled.div`
  margin: 25px;
  text-align: center;
`;

const PlayerContainer = styled.div`
  width: 50vw;
  margin-bottom: 100px;
`;

const LoadingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
