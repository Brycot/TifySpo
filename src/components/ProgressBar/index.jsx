import React from 'react';

export default function Progressbar({
    value,
    setValue,
    min,
    max,
    handleChange,
}) {
    const onChangeInput = (event) => {
        setValue(event.target.value);
        handleChange(event.target.value);
    };
    return (
        <input
            type="range"
            value={value}
            onChange={onChangeInput}
            min={min}
            step="1"
            max={max}
        />
    );
}
