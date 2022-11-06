import SongInfoPlayer from "../CurrentSongInfo/CurrentSongInfo";
import Player from "../Player";
import { Footer } from "./PlayingBar.styled";

function PlayingBar() {
    return (
        <Footer>
            <SongInfoPlayer />
            <Player />
        </Footer>
    );
}

export default PlayingBar;
