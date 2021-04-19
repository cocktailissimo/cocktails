import React, { useState } from 'react';

export default function CocktailGrid({cocktailResults}) {
   const [isIndex, setIsIndex] = useState();
   let isFullDescription = '';

  function showFull(index) {
    setIsIndex(!isIndex);
    isFullDescription = index === isIndex;
  }
  return (
    <>
    <ul aria-live="polite" className="list">
        {cocktailResults.map((cocktail, index) => {
        const { nom, remarques, id } = cocktail;
        return (
            <li key={index} className="character">
              <button onClick={() => showFull(index)}>
                <div><strong>{nom}</strong></div>
              </button>
                {
                  isFullDescription && isIndex === index && (
                    <>
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
                    </>
                  )  
                }
            </li>
        )
        }).slice(0,4).sort().reverse()}
    </ul>
    </>
  );
}
