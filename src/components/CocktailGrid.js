import React, { useState } from 'react';

export default function CocktailGrid({cocktailResults}) {
   const [isExpanded, setIsIExpanded] = useState(false);
   const [isIndex, setIsIndex] = useState();
   let isFullDescription = '';

  function showFull(index) {
    setIsIExpanded(!isExpanded);
    setIsIndex(index);
    
  }
  return (
    <>
    <ul aria-live="polite" className="list">
        {cocktailResults.map((cocktail, index) => {
        const { nom, remarques, id } = cocktail;
        console.log(isExpanded, index, isIndex);
        return (
            <li key={index} className="character">
              <button onClick={() => showFull(index)}>
                <div><strong>{nom}</strong></div>
              </button>
                <span className={isExpanded && (index === isIndex) ? 'expanded' : 'collapsed'}>
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
                </span>
            </li>
        )
        }).slice(0,4).sort().reverse()}
    </ul>
    </>
  );
}
