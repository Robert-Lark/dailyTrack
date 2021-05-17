import React from "react";
import {Container} from "react-bootstrap";
const AUTH_URL =
  "https://accounts.spotify.com/authorize?client_id=e69e43bc2c054f71a639b83ace048100&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state";

export default function Login() {
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{minHeight: "100vh"}}
    >
      <a
        className="btn btn-success btn-lg"
        style={{backgroundColor: "#1DD05C"}}
        href={AUTH_URL}
      >
        Spotify
      </a>
      <div style={{width: "5vw"}}></div>
      <a
        className="btn btn-success btn-lg btn-red"
        style={{backgroundColor: "#FF0000"}}
        href={'/youtube'}
      >
        You Tube
      </a>
    </Container>
  );
}
