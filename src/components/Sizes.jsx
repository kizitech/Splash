import React from 'react'

export default function Sizes({sizes}) {
    return (
      <div className="buy__details-product-sizes-range">
        {sizes.map((size, index) => (
          <button key={index}>{size}</button>
        ))}
      </div>
    );
}
