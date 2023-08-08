import React from 'react'

export default function Colors({colors}) {
    return (
      <div className="buy__details-product-colors-palette">
        {colors.map((color, index) => (
          <button
            key={index}
            title={color}
            style={{ background: color }}
          ></button>
        ))}
      </div>
    );
}
