import { createContext } from "react";

export const PlaylistContext = createContext([]);

export const CurrentTrackContext = createContext({
    currentTrack: {},
    setCurrentTrack: () => { }
});

export const AuthContext = createContext({
    auth: false,
    setAuth: () => { }
});