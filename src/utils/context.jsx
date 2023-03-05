import { createContext, useState } from 'react';

export const PlaylistContext = createContext([]);

export const CurrentTrackContext = createContext({
    currentTrack: {},
    setCurrentTrack: () => {},
});
