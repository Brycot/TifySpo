import React from 'react';

export default function Progressbar({ volume, setVolume, handleChange }) {
    const onChangeInput = (event) => {
        setVolume(event.target.value);
        handleChange();
    };
    return (
        <input
            type="range"
            min="0"
            value={volume}
            onChange={onChangeInput}
            max="100"
        />
    );
}
