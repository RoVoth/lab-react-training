import React from 'react';

function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  type === 'MasterCard' ? (type = 'MasterCard') : (type = 'Visa');
  return (
    <div id="karte" style={{ backgroundColor: `${bgColor}`, color }}>
      <img src="{type}" alt="{type}" />
      <p>**** **** **** {number.slice(-4)}</p>
      <div>
        <div>
          <p>
            Expires {expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
      </div>
      <p>{owner}</p>
    </div>
  );
}

export default CreditCard;
