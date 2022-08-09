import React from 'react';

const IdCard = (props) => {
  const { firstName, lastName, gender, height, picture } = props;

  return (
    <div>
      <div id="id-card">
        <img src={picture} alt="id-img" />
        <tr>
          <p>
            First Name:
            {firstName}
          </p>

          <p>
            Last name:
            {lastName}
          </p>
          <p>
            Gender:
            {gender}
          </p>
          <p>
            Height:
            {height}
          </p>
          <p>
            Birth:
            {props.birth.toDateString()}
            {/* Convertir la fecha de hoy en una cadena legible:  new Date() => toDateString() */}
          </p>
        </tr>
      </div>
    </div>
  );
};

export default IdCard;
