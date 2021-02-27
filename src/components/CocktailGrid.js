import React from 'react';
import data from "../data/cocktails.json";  

export default function CocktaiGrid(){
		return (
      <>
            <div>
                {
                  data.Cocktails
                    .map((cocktail) => {
                    return (
                      <div key={cocktail.illustration}>
                        <h4>{cocktail.nom}</h4>
                        <ul>
                          {
                            cocktail.ingredient.map((ingredientcocktail) => {
                              return (
                                  <li key={ingredientcocktail.nomingredient}>
                                    <div>{ingredientcocktail.pourcentage}</div>
                                    <div>{ingredientcocktail.nomingredient}</div>
                                    <div>{ingredientcocktail.complementingredient}</div>
                                  </li>
                              );
                            })
                          }
                        </ul>
                        <ul>
                          {
                            cocktail.recette.map((recettecocktail) => {
                              return (
                                  <li key={recettecocktail.etape1}>
                                    <div>{recettecocktail.etape1}</div>
                                    <div>{recettecocktail.etape2}</div>
                                    <div>{recettecocktail.etape3}</div>
                                  </li>
                              );
                            })
                          }
                        </ul>
                        <p>{cocktail.remarques}</p>
                      </div>
                    );
                  })
                } 
            </div>
            </>
        );
} 
