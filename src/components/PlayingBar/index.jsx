import SongInfoPlayer from "../CurrentSongInfo/CurrentSongInfo";
import Player from "../Player";
import AddonsControl from "../AddonsControl";
import { Footer } from "./PlayingBar.styled";

function PlayingBar() {
    return (
        <Footer>
            <SongInfoPlayer />
            <Player />
            <AddonsControl/>
        </Footer>
    );
}

export default PlayingBar;
