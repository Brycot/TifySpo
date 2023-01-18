import { useState, useEffect } from "react";
import useAuth from "../hooks/useAuth";

export const useSpotify = () => {


    return {
        player,
        is_active,
        is_paused,
        current_track,
    };
};
