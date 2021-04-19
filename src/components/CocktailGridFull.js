import React from 'react';


export default function CocktailGridFull({cocktailResults}) {
  return (
    <>
    <ul aria-live="polite" className="list">
        {cocktailResults.map((cocktail, index) => {
        const { nom, remarques, id } = cocktail;
        return (
            <li key={index} className="character">
            <div><strong>{nom}</strong></div>
            <div><strong>{id}</strong></div>
            <div>{remarques}</div>
            {cocktail.recette.map((recettecocktail) => {
                return (
                    <div key={recettecocktail.etape1}>
                      <div>{recettecocktail.etape1}</div>
                      <div>{recettecocktail.etape2}</div>
                      <div>{recettecocktail.etape3}</div>
                    </div>
                );
              })}
            </li>
        )
        }).sort().reverse()}
    </ul>
    </>
  );
}
