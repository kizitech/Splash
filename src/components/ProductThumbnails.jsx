import React from 'react'

export default function ProductThumbnails({images, setIndex}) {
    return (
        <div className="buy__details-image-thumbnails-thumb">
            {
                images.map((img, index)=>(
                    <img src={img} alt="Side View" key={index} 
                    onClick={() => setIndex(index)} />
                ))
            }
        </div>
    )
}
