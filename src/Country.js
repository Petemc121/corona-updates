import React from 'react'

export default function Country({dataPoint}) {
    console.log(dataPoint);

    return (
        <option value={dataPoint}>
            {dataPoint}
        </option>
    )
}
