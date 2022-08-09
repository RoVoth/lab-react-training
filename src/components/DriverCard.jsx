import React from 'react';

function DriverCard({ name, rating, img, car }) {
  return (
    <div id="driverCard">
      <div>
        <img id="imageDriver" src={img} alt={name} />
      </div>
      <div>
        <h2>{name}</h2>
        <h5>{rating}</h5>
        <p>
          {car.model}-{car.licensePlate}
        </p>
      </div>
    </div>
  );
}

export default DriverCard;
