import React from 'react';
import '../App.css';

export default function GridList({characterResults}) {
  return (
    <>
    <ul aria-live="polite" className="list">
        {characterResults.map((character, index) => {
        const { title, description } = character;
        return (
            <li key={index} className="character">
            <div><strong>{title}</strong></div>
            <div>{description}</div>
            </li>
        )
        })}
    </ul>
    </>
  );
}
