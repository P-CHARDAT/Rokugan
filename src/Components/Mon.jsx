import React from "react";

export default function Mon({ name, imgSrc, imgAlt }) {
    return (
        <>
            <h1>{name}</h1>
            <img src={imgSrc} alt={imgAlt} />
        </>
    )

}