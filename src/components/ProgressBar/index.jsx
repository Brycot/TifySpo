import React from 'react';
import { Input } from './ProgressBar.styled';

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
        <Input
            type="range"
            value={value}
            onChange={onChangeInput}
            min={min}
            step="1"
            max={max}
        />
    );
}
