import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Login";
import Spotify from "./Spotify";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Youtube from "./YoutTube";

const code = new URLSearchParams(window.location.search).get("code");

function App() {
  return (
    <Router>
      <Route
        path="/"
        render={() => 
          code ? <Spotify code={code} /> : <Login />
        }
      />
      <Route path="/youtube" render={() => <Youtube />} />
    </Router>
  );
}

export default App;
