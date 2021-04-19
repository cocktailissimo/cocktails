import React, { useState } from 'react';
import CocktailGrid from './CocktailGrid';
import CocktailGridFull from './CocktailGridFull';
import cocktails from '../data/cocktails.json';


export default function FormCocktailsAlcool() {
    const [ingAlcool, setIngAlcool] = useState('avecAlcool');
    const cocktailResults = cocktails.filter(cocktail => cocktail.alcool === ingAlcool);
    const [isFull, setIsFull] = useState(false);
    function viewAll() {
      setIsFull(!isFull);
    }

  return (
    <>
      Cocktail avec ou sans alcool
        <button onClick={() => setIngAlcool('avecAlcool')} className={ ingAlcool === "avecAlcool" ? 'selected' : ''}>Avec Alcool</button>
        <button onClick={() => setIngAlcool('sansAlcool')} className={ ingAlcool === "sansAlcool" ? 'selected' : ''}>Sans Alcool</button>
        <button onClick={() => viewAll()}>
          {isFull ? "Voir tous" : "Réduire"}
        </button>
        { isFull ? (<CocktailGridFull cocktailResults={cocktailResults} />) : (<CocktailGrid            
          cocktailResults={cocktailResults} 
        />) }
    </>
  );
}
