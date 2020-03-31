import React from "react";

export default function ImageCard({imgUrl}) {
    return (
        <div className="image-card">
            <img src={imgUrl} alt="image of character" style={{maxWidth: "285px"}} />
        </div>
    );
}