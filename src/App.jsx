import { useState } from "react";
import PlayingBar from "./components/PlayingBar";
import SdkSpotify from "./components/sdkspotify";
import "./App.css";

function App() {
    return (
        <main className="App">
            <SdkSpotify />
            <p className="read-the-docs">tifyspo</p>
            <PlayingBar />
        </main>
    );
}

export default App;
