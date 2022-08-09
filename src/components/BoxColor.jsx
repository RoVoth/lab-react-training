import React from 'react';

function BoxColor(props) {
  const rgb = (props.r <= 255) + (props.g <= 255) + (props.b <= 255);

  return (
    <div style={{ backgroundColor: rgb }} className="boxcolor">
      rgb ${props.r}, ${props.g}, ${props.b} <p>{rgb}</p>
    </div>
  );
}

export default BoxColor;
