import React from "react";

function CardListeItems({ name, email, id }) {
  return (
    <div key={id} className="card-container">
      <img
        src={`https://robohash.org/${id}?set=set2&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <i>{email}</i>
    </div>
  );
}

export default CardListeItems;
