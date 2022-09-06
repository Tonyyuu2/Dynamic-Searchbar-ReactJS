import React from "react";
import CardListItems from "./CardListeItems";
import './card-list.styles.css'

function CardList({ people }) {
  const cardListItems = people.map((person) => {
    const { name, email, id } = person;
    return <CardListItems name={name} email={email} id={id} />;
  });

  return <div className="card-list">{cardListItems}</div>;
}

export default CardList;
